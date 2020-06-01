'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor(){
    super()
    this.state = {
      userInfo: null,
      isFetching: false,
      repos: [],
      starred: []
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  geraUrlApi(username, tipo){
    const internalUser = username ? `/${username}` : ''
    const internalTipo = tipo ? `/${tipo}` : ''
    return `https://api.github.com/users${internalUser}${internalTipo}`
  }

  showRepos(tipo) {
    return (e) => {
      const username = this.state.userInfo.username
      ajax().get(this.geraUrlApi(username, tipo))
      .then((result) => {
        this.setState({
          [tipo]: result.map((repo) => {
            return {
              name: repo.name,
              link: repo.html_url
            }
          })
        })
      })
    }
  }
  

  handleSearch (e) {
    const username = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    if(keyCode === ENTER){
      this.setState({
        isFetching: true
      })
      ajax().get(this.geraUrlApi(username))
      .then((result) => {
        this.setState({
          userInfo: {
            name: result.name,
            avatar: result.avatar_url,
            username: result.login,
            repos: result.public_repos,
            seguidores: result.followers,
            seguindo: result.following
          },
          repos: [],
          starred: []
        })
      })
      .always(() => {
        this.setState({
          isFetching: false
        })
      })
    }
  } 

  render() {
    return (
      <AppContent
        {...this.state} 
        // userInfo={this.state.userInfo}
        // repos={this.state.repos}
        // starred={this.state.starred}
        // isFetching={this.state.isFetching}
        handleSearch={this.handleSearch}
        showRepos={this.showRepos('repos')}
        showStarred={this.showRepos('starred')}
      />
    )
  }

  
}

export default App

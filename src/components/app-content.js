'use strict'

import React from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({userInfo, repos, starred, handleSearch, showRepos, showStarred, isFetching}) => {
    return (
        <div className='app'>
            <Search isDisabled={ isFetching } handleSearch={handleSearch} />
            {isFetching && <div>Carregando...</div>}
            {!!userInfo && <UserInfo userInfo={userInfo}/> }
            {!!userInfo && <Actions showRepos={showRepos}
                                    showStarred={showStarred} /> }

            { repos.length > 0 &&
            <Repos 
                className='repos' 
                title='Repositórios' 
                repos={repos}/>
            }

            
            
            { starred.length > 0 &&
            <Repos 
                className='starred' 
                title='Favoritos' 
                repos={starred}/>
            }
            
        
        </div>
    )
}

AppContent.propTypes = {
    userInfo: React.PropTypes.object,
    repos: React.PropTypes.array.isRequired,
    starred: React.PropTypes.array.isRequired,
    isFetching: React.PropTypes.bool.isRequired, 
    handleSearch: React.PropTypes.func.isRequired,
    showRepos: React.PropTypes.func.isRequired,
    showStarred: React.PropTypes.func.isRequired
}


export default AppContent
'use strict'

import React from 'react'

const UserInfo = ({userInfo}) => {
    return (
    <div className='user-info'>
      <img  src={userInfo.avatar}/>
      <h1 className='username'>
        <a href={`https://github.com/${userInfo.username}`}>{userInfo.name}</a>
      </h1>

      <ul className='repos-info'>
        <li>Repositorios: {userInfo.repos}</li>
        <li>Seguidores: {userInfo.seguidores}</li>
        <li>Seguindo: {userInfo.seguindo}</li>
      </ul>
    </div>

    )
}

UserInfo.propTypes = {
    userInfo: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        username: React.PropTypes.string.isRequired,
        avatar: React.PropTypes.string.isRequired,
        repos: React.PropTypes.number.isRequired,
        seguidores: React.PropTypes.number.isRequired,
        seguindo: React.PropTypes.number.isRequired
    })
    
}

export default UserInfo
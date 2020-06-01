'use strict'

import React from 'react'

const Actions = ({showRepos, showStarred}) => {
    return (
        <div className='actions'>
            <button onClick={ showRepos}>Ver repositorios</button>
            <button onClick={ showStarred}>Ver Favoritos</button>
        </div>
    )
}

Actions.propTypes = {
    showRepos: React.PropTypes.func.isRequired,
    showStarred: React.PropTypes.func.isRequired
}

export default Actions
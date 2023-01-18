import React, { useState } from 'react'
import Enter from '../components/Enter';
import Register from '../components/Register'

function OnLoadPage({ username, setUsername, password, setPassword }) {



    return (
        <div className='onloadpage'>

            <Register
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
            />
            <Enter
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword} />
        </div>
    )
}

export default OnLoadPage
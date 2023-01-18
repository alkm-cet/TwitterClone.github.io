import React, { useEffect } from 'react'

function Posts({ itemArray, username}) {

    return (
        <div >
            {
                itemArray.map(x => {
                    return (
                        <div key={x.key} className='posts'>

                            <div className="poststopdiv">
                                <div className='photocontainer'>
                                    <img className='userPhoto' src="https://picsum.photos/200" alt="" />
                                </div>
                                <div className="tweettext">
                                    <p className='username'>{username} <small>@{username}</small></p>
                                    {x.value}
                                </div>
                            </div>



                            <div className="postbuttons">
                                <span className="material-symbols-outlined">
                                    maps_ugc
                                </span>

                                <span className="material-symbols-outlined">
                                    cycle
                                </span>

                                <span className="material-symbols-outlined">
                                    favorite
                                </span>

                                <span className="material-symbols-outlined">
                                    equalizer
                                </span>
                            </div>

                        </div>
                    )
                })
            }

        </div>
    )
}

export default Posts
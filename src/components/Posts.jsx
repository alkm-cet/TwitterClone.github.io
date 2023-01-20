import React from 'react'


function Posts({ itemArray, username }) {

    const handleclik = (e) => {
        e.target.classList.toggle('liked');
    }

    const deletetweet = (e) => {
        e.target.parentElement.parentElement.style.display = 'none';
    }

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

                                <span className="material-symbols-outlined" onClick={handleclik}>
                                    favorite
                                </span>

                                <span className="material-symbols-outlined">
                                    equalizer
                                </span>

                                <span class="material-symbols-outlined" onClick={deletetweet}>
                                    delete
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
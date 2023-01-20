import React, { useEffect } from 'react'

function Twit({ addedItem, setAddedItem, itemArray, setItemArray }) {

    const handleOnChange = (e) => {
        setAddedItem(e.target.value);
    }

    const handleOnClick = (e) => {
        if (addedItem == '') {
            e.target.style.opacity = ".5";
            e.preventDefault();
        } else {
            const items = {
                key: Math.floor(Math.random() * 10000),
                value: addedItem
            };
            e.target.style.opacity = "1"
            setItemArray(oldItems => [items, ...oldItems]);
            setAddedItem("");
        }
    }

    return (
        <div className='twitcontainer'>

            <div className="photocontainer">
                <img className='userPhoto' src="https://picsum.photos/200" alt="" />
            </div>

            <div className="twitleftcontainer">
                <input maxLength={280} className='twitInput' type="text" placeholder='Neler oluyor?' onChange={handleOnChange} value={addedItem}/>

                <div className="araclar">
                    <div className="araclarleft">

                        <span className="material-symbols-outlined">
                            imagesmode
                        </span>

                        <span className="material-symbols-outlined">
                            gif_box
                        </span>

                        <span className="material-symbols-outlined">
                            dynamic_form
                        </span>

                        <span className="material-symbols-outlined">
                            sentiment_satisfied
                        </span>

                        <span className="material-symbols-outlined">
                            calendar_month
                        </span>

                        <span className="material-symbols-outlined">
                            location_on
                        </span>


                    </div>
                    <button className='tweetbtn' onClick={handleOnClick}>Tweetle</button>
                </div>
            </div>



        </div>
    )
}

export default Twit
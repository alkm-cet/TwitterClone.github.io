import React, { useState, useEffect } from 'react'
import Twit from '../components/Twit'
import Posts from '../components/Posts';

function Main({ username }) {

  const [addedItem, setAddedItem] = useState("");
  const [itemArray, setItemArray] = useState([]);

  return (
    <div className='maincontainer'>
      <Twit
        addedItem={addedItem}
        setAddedItem={setAddedItem}
        itemArray={itemArray}
        setItemArray={setItemArray}
      />
      <Posts
        itemArray={itemArray}
        username={username} />
    </div>
  )
}

export default Main
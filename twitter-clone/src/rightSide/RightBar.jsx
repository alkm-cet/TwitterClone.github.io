import React from 'react'
import Docket from './Docket'
import Whotofollow from './Whotofollow'

function RightBar() {
  return (
    <div className='rightbarcontainer'>
      <input type="search" name="" id="" className='searchinput' placeholder="Twitter'da Ara" />
      <Docket/>
      <Whotofollow/>
    </div>
  )
}

export default RightBar
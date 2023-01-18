import React from 'react'
import WhotofollowComponents from '../components/WhotofollowComponents';

function Whotofollow() {
  return (
    <div className='whotofollow'>
      <h3 className='whotofollowh3'>Kimi takip etmeli</h3>

      <WhotofollowComponents
        img={'https://loremflickr.com/320/240/girl'}
        mahlas={'Larsen'}
        email={'@LarsenLorem'}
      />
      <WhotofollowComponents
        img={'https://loremflickr.com/320/240/boy'}
        mahlas={'Ali Kemal'}
        email={'@AKÇ'}
      />
      <WhotofollowComponents
        img={'https://loremflickr.com/320/240/paris'}
        mahlas={'Babel'}
        email={'@Babell'}
      />
      <WhotofollowComponents
        img={'https://loremflickr.com/320/240/france'}
        mahlas={'Ra'}
        email={'@Ralor'}
      />

      <a href="" style={{ textDecoration: 'none' }}>
        <span style={{ color: 'rgb(29, 155, 240)' }}>Daha fazla göster</span>
      </a>
    </div>
  )
}

export default Whotofollow
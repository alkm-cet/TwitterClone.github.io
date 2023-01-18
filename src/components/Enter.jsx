import React, { useState, useRef } from 'react'

function Enter({ username, setUsername, password, setPassword }) {

  const header = useRef()

  const [enteredUserName, setEnteredUserName] = useState();
  const [enteredPassword, setEnteredPassword] = useState();

  const handleUserName = (e) => {
    setUsername(e.target.value)
    setEnteredUserName(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
    setEnteredPassword(e.target.value)
  }


  const giris = (e) => {
    let isim = localStorage.getItem('isim');
    let parola = localStorage.getItem('parola');
    if (enteredUserName != isim || enteredPassword != parola) {
      e.target.parentElement.children[1].innerText = "Kullanıcı adı veya şifre hatalı";
    } else {
      let parent = e.target.parentElement;
      parent.parentElement.style.display = 'none'
    }
  }

  return (
    <div className='entercontainer'>

      <div className="registertopimg">
        <img style={{ width: 23, height: 23, }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png" alt="" />
      </div>

      <h1 className='registerh1' ref={header}>GİRİŞ</h1>

      <div className='registerinputdiv'>
        <input type="text" placeholder='Kullanıcı adı..' className='registerinput' onChange={handleUserName} />
        <input type="text" placeholder='Şifre..' className='registerinput' onChange={handlePassword} />
      </div>

      <button className='registeriler' onClick={giris}>Giriş Yap</button>
      <button className='registerşifreunuttum'>Şifreni mi unuttun?</button>

    </div>
  )
}

export default Enter
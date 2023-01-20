import React from 'react'

function Register({ username, setUsername, password, setPassword }) {

    const storeUsername = (e) => {
        setUsername(e.target.value)
    }

    const storePassword = (e) => {
        setPassword(e.target.value)
    }

    // console.log(localStorage.getItem('isim'), localStorage.getItem('parola'))

    const register = (e) => {

        if (username != undefined && password != undefined) {

            localStorage.setItem('isim', username);
            localStorage.setItem('parola', password);
            console.log(localStorage.getItem('isim'), localStorage.getItem('parola'))
            let parent = e.target.parentElement;
            parent.style.display = 'none'

        } else {
            let parent = e.target.parentElement;
            parent.children[1].innerText = "Boş alan bırakılamaz!";
        }

    }

    const directenter = (e) => {
        let parent = e.target.parentElement;
        parent.parentElement.style.display = 'none'
    }

    const resetregister = () => {
        localStorage.removeItem('isim');
        localStorage.removeItem('parola');
        console.log(localStorage.getItem('isim'), localStorage.getItem('parola'))
    }

    return (
        <div className='registercontainer'>

            <div className="registertopimg">
                <img style={{ width: 23, height: 23, }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png" alt="" />
            </div>

            <h1 className='registerh1'>Twitter'a giriş yap</h1>

            <div className="googleilegir">
                <img style={{ width: 23, height: 23, }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="" />
                Google ile oturum açın
            </div>

            <div className="appleilegir">
                <img style={{ width: 23, height: 23, }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/640px-Apple_logo_black.svg.png" alt="" />
                Apple ile giriş yap
            </div>

            <div className="veya">
                <hr className='veyahr' />
                veya
                <hr className='veyahr' />
            </div>

            <div className='registerinputdiv'>
                <input type="text" placeholder='Kullanıcı adı..' className='registerinput' onChange={storeUsername} />
                <input type="text" placeholder='Şifre..' className='registerinput' onChange={storePassword} />
            </div>

            <button className='registeriler' onClick={register}>Kaydol</button>
            <button className='registerşifreunuttum' onClick={resetregister}>Kaydı Sıfırla</button>

            <div className="registergirişyap">
                Zaten bir hesabın var mı?

                <a href="#" onClick={directenter}>
                    Giriş Yap
                </a>

            </div>

        </div>
    )
}

export default Register
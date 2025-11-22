import React from 'react'
import useFormFields from '../../../Utils/UseFormFields'
import Home from '../../Home'
import '../style.css'
export default function SinUp({handlePageType,active, handelActive}) {
  const [fields,handleChange]=useFormFields()
    const handleSubmit=async(e)=>{
      e.preventDefault()
      try {
        const res=await fetch('https://fakestoreapi.com/auth/login',{
          method:'POST',
          headers:{
            'Content-type':"application/json"
          },
          body:JSON.stringify(fields)
        })
        const data= await res.json()
        if(data.token){
          <Home/>
        }else{
          alert('username or password incorrect')
        }
      } catch (error) {
        alert('username or password incorrect')

      }
    }
  return (
    <>
      {/* Register Form */}
      <div className="form-box Register">
        <h2 className="animation" style={{ "--li": 17, "--S": 0 }}>ثبت نام</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-box animation" style={{ "--li": 18, "--S": 1 }}>
            <input type="text" required name='username' onChange={handleChange} />
            <label>نام کاربری</label>
            <box-icon type="solid" name="user" color="gray"></box-icon>
          </div>

          <div className="input-box animation" style={{ "--li": 19, "--S": 2 }}>
            <input type="email" required name='username' onChange={handleChange} />
            <label>ایمیل</label>
            <box-icon name="envelope" type="solid" color="gray"></box-icon>
          </div>

          <div className="input-box animation" style={{ "--li": 19, "--S": 3 }}>
            <input type="password" required name='username' onChange={handleChange} />
            <label>رمز عبور</label>
            <box-icon name="lock-alt" type="solid" color="gray"></box-icon>
          </div>

          <div className="input-box animation" style={{ "--li": 20, "--S": 4 }}>
            <button className="btn" type="submit">ثبت نام</button>
          </div>

          <div className="regi-link animation" style={{ "--li": 21, "--S": 5 }}>
            <p>
              حساب کاربری دارید؟ <br />
              <a
                href="#"
                className="SignInLink"
                onClick={(e) => {
                  e.preventDefault();
                  handelActive(false);   // = LoginLink.addEventListener('click')
                  handlePageType()
                }}
              >
                ورود
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="info-content Register">
        <h2 className="animation" style={{ "--li": 17, "--S": 0 }}>خوش آمدید!</h2>
        <p className="animation" style={{ "--li": 18, "--S": 1 }}>
          از حضور شما در کنار ما خوشحالیم. اگر به کمک نیاز دارید، در خدمت شما هستیم.
        </p>
      </div>
</>
  )
}

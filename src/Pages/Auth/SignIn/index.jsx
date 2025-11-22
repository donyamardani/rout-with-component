import React from 'react'
import useFormFields from '../../../Utils/UseFormFields'
import '../style.css'
export default function SinIn({handlePageType,active, handelActive}) {
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
          alert('login')
        }else{
          alert('username or password incorrect')
        }
      } catch (error) {
        alert('username or password incorrect')

      }
    }
  return (
    <>
      {/* Login Form */}
      <div className="form-box Login">
        <h2 className="animation" style={{ "--D": 0, "--S": 21 }}>ورود</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-box animation" style={{ "--D": 1, "--S": 22 }}>
            <input type="text" required name='username' onChange={handleChange} />
            <label>نام کاربری</label>
            <box-icon type="solid" name="user" color="gray"></box-icon>
          </div>

          <div className="input-box animation" style={{ "--D": 2, "--S": 23 }}>
            <input type="password" required name='password' onChange={handleChange} />
            <label>رمز عبور</label>
            <box-icon name="lock-alt" type="solid" color="gray"></box-icon>
          </div>

          <div className="input-box animation" style={{ "--D": 3, "--S": 24 }}>
            <button className="btn" type="submit">ورود</button>
          </div>

          <div className="regi-link animation" style={{ "--D": 4, "--S": 25 }}>
            <p>
              حساب کاربری ندارید؟ <br />
              <a
                href="#"
                className="SignUpLink"
                onClick={(e) => {
                  e.preventDefault()
                  handelActive(true);
                  handlePageType()   // = RegisterLink.addEventListener('click')
                }}
              >
                ثبت نام
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="info-content Login">
        <h2 className="animation" style={{ "--D": 0, "--S": 20 }}>خوش آمدید!</h2>
        <p className="animation" style={{ "--D": 1, "--S": 21 }}>
          خوشحالیم که دوباره با ما هستید. اگر به کمک نیاز دارید، در خدمت شما هستیم.
        </p>
      </div>

    </>
  )
}

import React from "react";
import { useState } from "react";
import SignIn from './SignIn';
import SignUp from './SignUp';
import './style.css'
export default function Auth() {
  // state برای فعال‌بودن صفحه ثبت‌نام
  const [active, setActive] = useState(false);
  const handelActive=(e)=>{
    setActive(e)
  }
  const [pageType, setPageType] = useState("signIn");
  const handlePageType = () => {
    setPageType(pageType == "signIn" ? "signUp" : "signIn");
  }    
  return (
    <>
    
    <div className={`container ${active ? "active" : ""}`}>

      <div className="curved-shape"></div>
      <div className="curved-shape2"></div>
      
      {pageType == "signIn" ? (
        <SignIn handlePageType={handlePageType} active={active} handelActive={handelActive}/>
      ) : (
        <SignUp handlePageType={handlePageType} active={active} handelActive={handelActive} />
      )}
     
    </div>
    </>
  )
}
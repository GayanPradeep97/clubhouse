import React from 'react'
import style from '../style/Welcome.module.css';

export default function Welcome() {
  return (
    <div className={style.welcomcontainer}>
        <h1>Welcome page</h1>
        <div className="welcomeInfo">
            <p>we're working hard to gt clubhouse ready for 
                everyone!While w wrap up the finishing
                touches.we're adding people gradually to 
                make sure nothing breaks.
            </p>

            <p> Anyone can join with an invite from an existing
                usr - or reserve your username and we'll text 
                you if you have a friend on the app who can't
                you in.We are so gratful you're here and the
                wait to hav you join!

            </p>
            <p>Paul, Rohan & the clubhouse team</p>
        </div>
        </div>
  )
}




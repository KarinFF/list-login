import React from 'react'
import firebase, { auth } from 'firebase'


const logOutUser = () => {
  firebase.auth().signout()
}

const LogOut = <button onClick={auth.logOutUser}>Log out</button>

export default LogOut


// import { auth } from '../firebase';
//
// const SignOutButton = () =>
//   <button
//     type="button"
//     onClick={auth.doSignOut}
//   >
//     Sign Out
//   </button>
//
// export default SignOutButton

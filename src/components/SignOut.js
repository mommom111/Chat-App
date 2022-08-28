import { Button } from '@mui/material'
import { auth } from '../firebase.js'
import React from 'react'
import { Phone } from '@mui/icons-material'

function SignOut() {
  return (
    <div className='header'>
      <Button style={{ color: 'white', fontSize: '15px' }} onClick={() => auth.signOut()}>
        サインアウト
      </Button>
      <h3>{auth.currentUser.displayName}</h3>
      <Phone />
    </div>
  )
}

export default SignOut
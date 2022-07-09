import React from 'react'

export default function Footer(props) {
    const newdate = new Date();
    
  return (
    <div style={{backgroundColor: props.mode ==='dark'? 'black':'white', height:65, color : props.mode === 'dark'? 'white':'black' }} align="center">
        <p style={{paddingTop:20}}>{`TextUtils @ ${newdate.getFullYear()} all rights are reserved`}</p>
    </div>
  )
}

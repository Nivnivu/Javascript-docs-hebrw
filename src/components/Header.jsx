import React from 'react'

function Header(props) {
  return (
    <div className='header'>
        <h1>מתודות נפוצות בג'אווה סקריפט</h1>
        <ul>
            <li onClick={() => {props.setSubject('strings')}}>מחרוזות</li>
            <li onClick={() => {props.setSubject('arrays')}}>מערכים</li>
            <li onClick={() => {props.setSubject('objects')}}>אובייקטים</li>
            <li onClick={() => {props.setSubject('numbers')}}>מספרים ומתמטיקה</li>
            <li onClick={() => {props.setSubject('date')}}>זמן ותאריכים</li>
        </ul>
    </div>
  )
}

export default Header
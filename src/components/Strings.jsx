import React from 'react'

function Strings(props) {
  return (
    <>
    <h2 className='headline2'>מחרוזות</h2>
    <div className='MainContainer'>
        <div className='flexContForList'>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GNd')} } className='item'>let string = "Hello World!";</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GNp')}} className='item'>let escape = 'I don\'t \n know';</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GNf')}} className='item'>let length = string.length;</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GNs')}} className='item'>string.indexOf("World");</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GNt')}} className='item'>string.lastIndexOf("World"); </span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GNu')}} className='item'>string.slice(3, 6);</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GNv')}} className='item'>string.replace("abc","123");  </span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GNw')}} className='item'>string.toUpperCase();</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GNw')}} className='item'>string.toLowerCase();</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GNx')}} className='item'>string.charAt(2);</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GNA')}} className='item'>string.split(",");</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GNC')}} className='item'>number.toString(16); </span>
            
            
        </div>
        <div className='flexContForListleft'>
            <span className='item2'>// הגדרה של משתנה</span>
            <span className='item2'>// בריחה מגרש או ירידת שורה</span>
            <span className='item2'>// אורך המחרוזת</span>
            <span className='item2'>// מחזיר אינדקס ראשוני, אם לא נמצא מחזיר -1</span>
            <span className='item2'>// מחזיר אינדס סופי</span>
            <span className='item2'>// מחזיר מחזורת חתוכה לפי האינדקס</span>
            <span className='item2'>// מחליף חלק ממחרוזת בחלק אחר  </span>
            <span className='item2'>// משנה לאותיות גדולות  </span>
            <span className='item2'>// משנה לאותיות קטנות  </span>
            <span className='item2'>// מחזיר את המיקום של האות  </span>
            <span className='item2'>// חותך מחרוזת ומחזיר מערך</span>
            <span className='item2'>// הופך כל סוג מידע למחרוזת  </span>
            

        </div>
    </div>
    </>
  )
}
 
export default Strings
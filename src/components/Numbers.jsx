import React from 'react'

function Numbers(props) {
  return (
    <>
    <h2 className='headline2'>מספרים ומתמטיקה</h2>
    <div className='MainContainer'>
        <div className='flexContForList'>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GP4')} } className='item'>let pi = 3.141;</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GP4')}} className='item'>pi.toFixed(0);</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GP4')}} className='item'>let pi = Math.PI; </span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GP4')}} className='item'>Math.round(4.4);</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GP7')}} className='item'>Math.pow(2,8);</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GP7')}} className='item'>Math.sqrt(49); </span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GP7')}} className='item'>Math.abs(-3.14);</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GP8')}} className='item'>Math.ceil(3.14);</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GP8')}} className='item'>Math.floor(3.99);</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GP8')}} className='item'>Math.random();</span>
        </div>
        <div className='flexContForListleft'>
            <span className='item2'>// הגדרה של משתנה מסוג מספר</span>
            <span className='item2'>// כמה מספרים אחרי הנקודה</span>
            <span className='item2'>// הגדרה של פאי מתוך ספריית מתמטיקה</span>
            <span className='item2'>// מעגל למעלה או למטה</span>
            <span className='item2'>// מחזיר מספר בחזקת מספר</span>
            <span className='item2'>// מחזיר שורש ריבועי</span>
            <span className='item2'>// מחזיר ערך מוחלט</span>
            <span className='item2'>// מעגל למעלה תמיד</span>
            <span className='item2'>// מעגל למטה תמיד</span>
            <span className='item2'>// מחזיר מספר רנדומלי בין 0-1</span>

        </div>
    </div>
    </>
  )
}

export default Numbers
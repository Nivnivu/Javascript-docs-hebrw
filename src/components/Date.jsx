import React from 'react'

function Date(props) {
  return (
    <>
    <h2 className='headline2'>זמן ותאריכים</h2>
    <div className='MainContainer'>
        <div className='flexContForList'>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GPm')} } className='item'>let date = new Date();</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GPm')}} className='item'>date.getDay();</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GPm')}} className='item'>date.getDate();</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GPm')}} className='item'>date.getFullYear();</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GPm')}} className='item'>date.getHours();</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GPp')}} className='item'>date.getMilliseconds();</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GPp')}} className='item'>date.getMinutes();</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GPp')}} className='item'>date.getMonth();</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GPp')}} className='item'>date.getSeconds();</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GPp')}} className='item'>date.getTime();</span>
        </div>
        <div className='flexContForListleft'>
            <span className='item2'>// הגדרה של תאריך</span>
            <span className='item2'>// 0-6 מחזיר מספר של היום בשבוע</span>
            <span className='item2'>// מחזיר מספר בין 1-31</span>
            <span className='item2'>// מחזיר את השנה הנוכחית</span>
            <span className='item2'>// מחזיר את השעה בין 0-23</span>
            <span className='item2'>// מחזיר מילישניות בין 0-999</span>
            <span className='item2'>// מחזיר את הדקות בין 0-59</span>
            <span className='item2'>// מחזיר את החודש בין 0-11</span>
            <span className='item2'>// מחזיר את השניות בין 0-59</span>
            <span className='item2'>// מחזיר את הזמן שעבר במילישניות מ 1970</span>
        </div>
    </div>
    </>
  )
}

export default Date
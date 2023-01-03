import React from 'react'

function Objects(props) {
  return (
    <>
    <h2 className='headline2'>אובייקטים</h2>
    <div className='MainContainer'>
        <div className='flexContForList'>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GOP')} } className='item'>const object = &#123;firstName: "Niv", lastName: "Barchechet"&#125; </span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GOP')}} className='item'>Object.assign(object1, object2) </span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GOS')}} className='item'>Object.entries()</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GOV')}} className='item'>Object.keys()</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GOV')}} className='item'>Object.values()</span>

        </div>
        <div className='flexContForListleft'>
            <span className='item2'>// הגדרה של אובייקט</span>
            <span className='item2'>// מחבר שני אובייקטים</span>
            <span className='item2'>// הופך כל מפתח וערך לרשימה</span>
            <span className='item2'>// מחזיר רק את המפתחות</span>
            <span className='item2'>// מחזיר רק את הערכים</span>
        </div>
    </div>
    </>
  )
}

export default Objects
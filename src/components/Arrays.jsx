import React from 'react'

function Arrays(props) {
  return (
    <>
    <h2 className='headline2'>מערכים</h2>
    <div className='MainContainer'>
        <div className='flexContForList'>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GOj')} } className='item'>let dogs = ["Bulldog", "Beagle", "Labrador"];</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GOj')}} className='item'>let dogs = new Array("Bulldog", "Beagle", "Labrador");</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GOm')}} className='item'>dogs[0] = "Bull Terier";</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GOo')}} className='item'>dogs.forEach(element =&#62; console.log(element));</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GOp')}} className='item'>dogs.toString();</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GOr')}} className='item'>dogs.join(" * "); </span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GOv')}} className='item'>dogs.pop();  </span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GOv')}} className='item'>dogs.push("Chihuahua"); </span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GOv')}} className='item'>dogs.shift(); </span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GOv')}} className='item'>dogs.unshift("Chihuahua"); </span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GOC')}} className='item'>dogs.splice(2, 0, "Pug", "Boxer");</span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GOE')}} className='item'>let animals = dogs.concat(cats,birds); </span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GOF')}} className='item'>dogs.slice(1,4); </span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GOG')}} className='item'>dogs.sort();  </span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GOG')}} className='item'>dogs.reverse(); </span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GOY')}} className='item'>dogs.map(); </span>
            <span onClick={() => {props.setUrl('https://www.jdoodle.com/embed/v0/5GOZ')}} className='item'>dogs.filter(); </span>
    
        
        </div>
        <div className='flexContForListleft'>
            <span className='item2'>// הגדרה של מערך</span>
            <span className='item2'>// אפשר גם ככה</span>
            <span className='item2'>// מחליף את האיבר הראשון</span>
            <span className='item2'>// לולאה על מערך</span>
            <span className='item2'>// הופך למחרזות</span>
            <span className='item2'>// הופך למחרוזת עם סימן ריווח</span>
            <span className='item2'>// מסיר את האיבר האחרון במערך</span>
            <span className='item2'>// מוסיף איבר לסוף המערך</span>
            <span className='item2'>// מסיר את האיבר הראשון במערך</span>
            <span className='item2'>// מוסיף איבר לתחילת המערך</span>
            <span className='item2'>// מוסיף איברים במיקום ספציפי</span>
            <span className='item2'>// מחבר שני מערכים </span>
            <span className='item2'>// חותך אלמנטים במיקום מסוים</span>
            <span className='item2'>// מסדר אלמנטים לפי א'ב</span>
            <span className='item2'>// מסדר בסדר הופכי</span>
            <span className='item2'>// ממפה מערך לפי בקשה</span>
            <span className='item2'>// מסנן מערך לפי בקשה</span>
            

        </div>
    </div>
    </>
  )
}

export default Arrays
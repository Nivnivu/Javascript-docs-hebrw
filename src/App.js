import './App.css';
import { useState } from "react";
import Header from './components/Header';
import Numbers from './components/Numbers';
import Strings from './components/Strings';
import Arrays from './components/Arrays';
import Objects from './components/Objects';
import Date from './components/Date';

function App() {

  const [subject, setSubject] = useState();
  const [url , setUrl] = useState('https://www.jdoodle.com/embed/v0/5GHq');

  const ConditinalRender = () => { 
  if (subject == 'strings') {
      return <Strings setUrl={setUrl} /> }
  else if (subject == 'arrays') {
      return <Arrays setUrl={setUrl} />
  }
  else if (subject == 'objects') {
      return <Objects setUrl={setUrl} />
  }
  else if (subject == 'numbers') {
      return <Numbers setUrl={setUrl} />
  }
  else {return <Date setUrl={setUrl} />}
  }
  


  https://www.jdoodle.com/embed/v0/5GHq
  return (
    <div className="App">
        <Header ConditinalRender={ConditinalRender} setSubject={setSubject} />
      <div className='flexContainer'>
      <span className='render'><ConditinalRender  /></span>  
        <iframe src={url} scroll="no"  scrolling={"no"}></iframe>
        </div>
    </div>
  );
}

export default App;

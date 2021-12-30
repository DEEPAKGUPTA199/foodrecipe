import React,{useState} from 'react';
import Header from './header';
import Section from './Section';


function App() {
  // const[search,setSearch]=useState('deepak');

  // function inputChange(e){
  //       setSearch(e.target.value);
  
  return (
    <div className="App">
      <Header />
      <Section  />
    </div>
  );
}

export default App;

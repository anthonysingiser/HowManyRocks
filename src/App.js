import './App.css';
import React, { useState } from 'react';
import ConvertPoundsToDTRJS from "./ConvertPoundsToDTRJS"; 

export default function App() {
const [inputs, setInputs] = useState({});
const [submitInputs, setSubmitInputs] = useState({weight: 0})

const handleChange = (event) => {
  const weight = event.target.weight
  const value = event.target.value
  setInputs(values => ({...values, [weight]: value}))
}

const handleSubmit = (event) => {
  event.preventDefault();
  setSubmitInputs(inputs)
}

const showMeTheDTRJS = () => {
  if(submitInputs === inputs){
    return <ConvertPoundsToDTRJS inputs = {submitInputs}/>
  } else {
    return
  }
}
  
return (
  <div>
    <h1>HOW MANY 2019 DWAYNE "THE ROCK" JOHNSONS ARE YOU?</h1>
    <form onSubmit= {handleSubmit}>
      <label> Enter Your Weight in Pounds:
        <br></br>
      <input
        type="number"
        name="weight"
        value={inputs.weight}
        onChange={handleChange}
      />
      </label>
    </form>
    {showMeTheDTRJS()}
  </div>
);
}
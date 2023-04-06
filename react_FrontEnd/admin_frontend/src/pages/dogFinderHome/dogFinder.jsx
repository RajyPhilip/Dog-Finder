import React, { useEffect, useState } from 'react' ;
import './style.scss' ;
import axios from 'axios' ;

const DogFinder = () => {

  //states
  const [dogDetails, setDogDetails] = useState({
    dog1: "",
    dog2: "",
  });
  const [winner,setWinner] = useState('');

  //functions

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response1 = await fetch(
          "https://dog.ceo/api/breeds/image/random"
        );
        const data1 = await response1.json();
        const response2 = await fetch(
          "https://dog.ceo/api/breeds/image/random"
        );
        const data2 = await response2.json();
        setDogDetails({
          dog1: data1.message,
          dog2: data2.message,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchDogs();
  }, [winner]);


  const handleWinner = async (value)=>{
    let result = {
      dog1:dogDetails.dog1 ,
      dog2 : dogDetails.dog2
    }
    if(value === "dog1"){
      result.winner = dogDetails.dog1 ;
      setWinner(dogDetails.dog1) 
    }else{
      result.winner = dogDetails.dog2 ;
      setWinner(dogDetails.dog2) 

    }
    try {
      const response = await axios.post('/vote',result)
      console.log("response",response); 
      
    } catch (error) {
      console.log("error",error)
    }
    // setDogDetails(result)
  }

  return (
    <div className='dog-container'>
      <div>
        <h1 className='center'>Dog1</h1>
        <img className='dog_img' src={dogDetails.dog1} alt="" /> <br />
        <button onClick={()=>{handleWinner("dog1")}} className="Btn_">Mark Dog1 as winner </button>
      </div>
      <div>
      <h1 className='center'>Dog2</h1>
        <img className='dog_img' src={dogDetails.dog2} alt="" /> <br />
        <button onClick={()=>{handleWinner("dog2")}}  className="Btn_">Mark Dog2 as winner </button>
      </div>
    </div>
  )
}

export default DogFinder
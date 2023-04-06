import React, { useEffect, useState } from 'react';
import './style.scss';
import axios from 'axios';

const AllResult = () => {
  //state
  const [results, setResults] = useState([]);

  //functions
  useEffect(() => {
    let getAllResults = async (value) => {
      try {
        const response = await axios.get('/result');
        setResults(response.data.results);
      } catch (error) {
        console.log('error', error);
      }
    };
    getAllResults();
  }, []);

  const getTimeDifference = (createdAt) => {
    const now = Date.now();
    const createdAtTimestamp = new Date(createdAt).getTime();
    const timeDifference = now - createdAtTimestamp;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    return `${days} days, ${hours} hours ago`;
  };

  return (
    <div>
      {!results ? <div className='empty'><h1>Vote for Your fav Dogs </h1> </div> : results.map((result, index) => {
        return (
          <div key={index} className="caraousel-container">
            <div className="caraousel">
              <div>
                <h2 className="center">Winner</h2>
                <img className="dog_img" src={result.winner} alt="" />
              </div>
              <div className='timing'>
                <h3>Time of Vote</h3>
                <h6>{getTimeDifference(result.createdAt)}</h6>
              </div>
              <div>
                <h2 className="center">Looser</h2>
                <img
                  className="dog_img"
                  src={result.winner == result.dog1 ? result.dog2 : result.dog1}
                  alt=""
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllResult;

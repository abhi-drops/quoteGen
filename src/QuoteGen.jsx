import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuoteGen() {

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    // Fetch quote function
    const fetchQuote = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/quotes/random');
        const { quote, author } = response.data; // Destructuring response data
        setQuote(quote);
        setAuthor(author);
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };

    // Fetch initial quote on component mount
    useEffect(() => {
      fetchQuote();
    }, []);



  return (

    <>
      <div className="indicator ">
        <div className="indicator-item indicator-bottom">
          <button className="btn btn-warning" onClick={()=>fetchQuote()}><img src='https://cdn-icons-png.flaticon.com/128/9923/9923688.png' className='w-5 hover:animate-spin'/></button>
        </div>
        <div className="card border bg-sky-300">
          <div className="card-body">

            <h2 className="card-title mb-5 font-bold">Quote</h2>
            <p className=' italic'>'{quote}'</p>
            <div className='w-full flex justify-end text-end'>
            <p>-{author}</p>

          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default QuoteGen
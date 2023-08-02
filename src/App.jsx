// TODO
// 2. make a tooltip thing for the saved quotes that shows the whole quote
// 3. make text responsive.
// Add icons -- bootstrap or fontawesome
// Make my saved quotes a dropdown menu?

import { useState, useEffect } from 'react'
import Nav from './Nav/Nav'
import Main from './Main/Main'
import { SavedQuotesProvider } from './Context'



function App() {

  const [loadQuery, setLoadQuery] = useState([Math.random(), '']);
  const [quotes, setQuotes] = useState(null);

  console.log("APP:" + loadQuery[1]);
// GET QUOTES BASED ON QUERY -- New quotes every 10 quotes (because of the limit of 10 quotes at a time from the api)
  function handleGetNewQuotes() {
    setQuotes(null);
    const nextQuery = [Math.random(), loadQuery[1]];
    setLoadQuery(nextQuery);
  }

  const [searchQuery, setSearchQuery] = useState(loadQuery[1]);

  function changeSearchQuery(value) {
    setSearchQuery(value);
  }

  function handleSearchQuery() {
    setQuotes(null);
    const nextQuery = [Math.random(), searchQuery];
    setLoadQuery(nextQuery);
  }

  // Set querty with dropdown
  function handleSelectQuery(query) {
    setQuotes(null);
    setSearchQuery(query);
    const nextQuery = [Math.random(), query];
    setLoadQuery(nextQuery);
  }

// GET NEW QUOTES
  async function getQuotes(loadQuery) {
    let api;
    let category = loadQuery[1];

    if (loadQuery[1] !== '') {
      api = 'https://api.api-ninjas.com/v1/quotes?category=' + category + '&limit=10';
    }
    else {
      api = "https://api.api-ninjas.com/v1/quotes?limit=10";
    }

    try {
      console.log('asked for new quotes');
      const response = await fetch(api, {
        method: 'GET',
        headers: {
          'X-Api-Key': 'wVItqDLnADEF8ZJgHOeNwQ==T7Vy8jBOafRuhomP'
        }
      });
      const { statusCode, statusMessage, ...data } = await response.json();
      if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
      setTimeout(() => {
        setQuotes(data);
      }, 1000)
    } catch (error) {
      // If the API request failed, log the error to console and update state
      // so that the error will be reflected in the UI.
      console.error(error);
      // setData({ content: "Oops... Something went wrong" });
    }
  }


  useEffect(() => {
    getQuotes(loadQuery);
  }, [loadQuery]);

  useEffect(() => {
    changeBackgroundImage(loadQuery);
  }, [quotes])

  //Return the APP!
  let [backgroundImg, setBackgroundImg] = useState(`url('https://source.unsplash.com/random/?nature')`);

  function changeBackgroundImage(query) {

    console.log(quotes)
    if (loadQuery[1] !== '' && quotes !== null) {
      if (Object.keys(quotes).length > 0) {
        setBackgroundImg(`url('https://source.unsplash.com/random/?${query}`);
      }
    }
  }

  console.log(quotes);

  return (
      <SavedQuotesProvider>
      <div className='background-container' style={{ backgroundImage: backgroundImg}}>
          <Nav
            quotes={quotes}
            loadQuery={loadQuery}
            searchQuery={searchQuery}
            changeSearchQuery={changeSearchQuery}
            handleGetNewQuotes={handleGetNewQuotes}
            handleSearchQuery ={handleSearchQuery}
          />
          <Main
            quotes={quotes}
            loadQuery={loadQuery}
            handleSelectQuery={handleSelectQuery}
            handleGetNewQuotes={handleGetNewQuotes}
          />
        </div>
      </SavedQuotesProvider>
  )
}

export default App

// NO TOUCHING! (please)
const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

// YOUR CODE BELOW THIS LINE:
let roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}`;


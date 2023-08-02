import Quote from "./Quote"
import Share from "./Share"
import { useState } from 'react'


let quoteCounter = 0;

export default function QuoteBox({ quotes, handleGetNewQuotes }) {
    

    const [currentQuote, setCurrentQuote] = useState(quotes[quoteCounter]);

    function randomQuote() {
        console.log(quoteCounter, Object.keys(quotes).length)
        quoteCounter++;
        if (quoteCounter < Object.keys(quotes).length) {
            setCurrentQuote(quotes[quoteCounter]);
        }
        else {
            setCurrentQuote(quotes[quoteCounter]);
            handleGetNewQuotes();
            quoteCounter = 0;
        }
    }

    return (
        <section id='quote-box'>
            <Quote
                text={currentQuote.quote}
                author={currentQuote.author}
            />
            <div className="button-wrapper">
                <button id='new-quote' onClick={randomQuote}>New Quote</button>
                <Share
                    quote={currentQuote}
                    text={currentQuote.quote}
                    author={currentQuote.author}
                />
            </div>
        </section>
    )
}
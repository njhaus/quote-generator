import { useDispatch } from "../Context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from "@fortawesome/free-brands-svg-icons"



export default function Share({ quote, text, author }) {
    const dispatch = useDispatch();
    let tweetLink = 'twitter.com/intent/tweet?hashtags=quotes&freecodecamp&text=%22';
    
    function tweetQuote(t, a) {
        const text = t.replace(' ', '%20');
        const author = a.replace(' ', '%20');

        tweetLink += text + '%0A%20%20%20%20-' + author;
    }

    tweetQuote(text, author);

    return (
        <div className="share-wrapper">
            <a id='like-quote' className='' onClick={() => {
                dispatch({
                    type: 'save_quote',
                    quote: quote
                })
            }}><FontAwesomeIcon icon={faHeart} /></a>
            <label>Save quote</label>
            <a id='tweet-quote' href={tweetLink} target='_blank'><FontAwesomeIcon icon={faTwitter}/></a>
            <label>Tweet quote</label>
        </div>
    )
}

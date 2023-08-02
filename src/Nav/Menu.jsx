import { useSavedQuotes } from "../Context"
import { useDispatch } from "../Context";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Menu() {
    const savedQuotes = useSavedQuotes();
    const dispatch = useDispatch();

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    let dropdownClass;

    if (isDropDownOpen) {
        dropdownClass = 'dropdown-open';
    }
    else {
        dropdownClass = 'dropdown-closed';
    }

    return (
        <div className="dropdown-wrapper">
            <div id='dropdown-container'>
                <input type='checkbox' id='dropdown-toggle' value={isDropDownOpen} onChange={() => { setIsDropDownOpen(!isDropDownOpen) }} />
                <label htmlFor='dropdown-toggle' id='dropdown-label'><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></label>
                <ul id='dropdown' className={dropdownClass}>
                    {savedQuotes.length > 0 ? savedQuotes.map(quote =>
                        <li key={Math.random() * 10000000000} className='dropdown-item'>{quote.quote.slice(0, 20)}...
                            <p className="saved-hover">{quote.quote}<br></br>-{quote.author}</p>
                            <button id='delete-saved-quote' onClick={() => {
                                dispatch({
                                    type: 'delete_quote',
                                    quote: quote
                                })
                            }}>Del</button>
                        </li>
                    ) : <p>You currently have no saved quotes. Like a quote to save it!</p>}
                </ul>
            </div>
        </div>
    )
}
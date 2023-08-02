
import { createContext, useContext, useState } from "react";
import { useImmerReducer } from "use-immer";
import { useEffect } from "react";



// GET QUOTES FROM API AND PROVIDE THEM TO APP
// FOUND IN APP COMPONENT



// SET/ GET USER SAVED QUOTES
const SavedQuotesContext = createContext(null);
const SavedQuotesDispatchContext = createContext(null);


let savedQuotes;
const quotesInStorage = localStorage.getItem('savedQuotes');
quotesInStorage ? savedQuotes = JSON.parse(quotesInStorage) : savedQuotes = [];


export function SavedQuotesProvider({ children }) {

    const [quotes, dispatch] = useImmerReducer(savedQuotesReducer, savedQuotes);

    useEffect(() => {
        localStorage.setItem('savedQuotes', JSON.stringify(quotes));
    }, [quotes]);


    return (
        <SavedQuotesContext.Provider value={quotes}>
            <SavedQuotesDispatchContext.Provider value={dispatch}>
                {children}
            </SavedQuotesDispatchContext.Provider>
        </SavedQuotesContext.Provider>
    )
}


// CONTEXT

export function useSavedQuotes() {
    return useContext(SavedQuotesContext)
}

export function useDispatch() {
    return useContext(SavedQuotesDispatchContext);
}



// DISPATCH FUNCTIONS

export function savedQuotesReducer(draft, action) {
    switch (action.type) {
        case 'get_stored_quotes': {
            draft = action.quotes;
            break;
        }
        case 'save_quote': {
            if (!draft.some(quote => JSON.stringify(action.quote) === JSON.stringify(quote))) {
                draft.push(action.quote);
            }
            break;
        }
        case 'delete_quote': {

            if (draft.some(quote => JSON.stringify(quote) === JSON.stringify(action.quote))) {
                let deleteQuote = draft.findIndex(quote => JSON.stringify(action.quote) === JSON.stringify(quote));
                draft.splice(deleteQuote, 1);
            }
            break;
        }
    }

}

// NEED TO UPDATE DISPATCH TO HANDLE OBJECTS INSTEAD OF ARRAYS
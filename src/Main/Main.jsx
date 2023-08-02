import QuoteBox from "./QuoteBox";
import { useEffect, useState } from 'react';

export default function Main({ quotes, loadQuery, handleSelectQuery, handleGetNewQuotes }) {

    const [selectQuery, setSelectQuery] = useState('');

    useEffect(() => {
        if (selectQuery !== '' && selectQuery !== loadQuery[1]) {
            handleSelectQuery(selectQuery);
        }
    }, [selectQuery])

    const loading = <blockquote className="no-quotes">Loading quotes...</blockquote>;
    const noQuotes = <blockquote className="no-quotes">No quotes on your topic could be found. Try this list of available topics:
        <select name='topic-select'
            id='topic-select'
            value={selectQuery}
            onChange={(e) => {
                setSelectQuery(e.target.value);
            }}
        >
                            <option value='' disabled>(Select One)</option>                
                            <option value='age'>age</option>
                            <option value='alone'>alone</option>
                            <option value='architecture'>architecture</option>
                            <option value='anger'>anger</option>
                            <option value='art'>art</option>
                            <option value='attitude'>attitude</option>
                            <option value='beauty'>beauty</option>
                            <option value='birthday'>birthday</option>
                            <option value='business'>business</option>
                            <option value='change'>change</option>
                            <option value='communications'>communications</option>
                            <option value='computers'>computers</option>
                            <option value='courage'>courage</option>
                            <option value='dad'>dad</option>
                            <option value='dating'>dating</option>
                            <option value='death'>death</option>
                            <option value='design'>design</option>
                            <option value='dreams'>dreams</option>
                            <option value='education'>education</option>
                            <option value='environmental'>environmental</option>
                            <option value='equality'>equality</option>
                            <option value='experience'>experience</option>
                            <option value='failure'>failure</option>
                            <option value='faith'>faith</option>
                            <option value='family'>family</option>
                            <option value='fear'>fear</option>
                            <option value='fitness'>fitness</option>
                            <option value='food'>food</option>
                            <option value='forgiveness'>forgiveness</option>
                            <option value='freedom'>freedom</option>
                            <option value='friendship'>friendship</option>
                            <option value='funny'>funny</option>
                            <option value='future'>future</option>
                            <option value='god'>god</option>
                            <option value='good'>good</option>
                            <option value='government'>government</option>
                            <option value='happiness'>happiness</option>
                            <option value='health'>health</option>
                            <option value='history'>history</option>
                            <option value='hope'>hope</option>
                            <option value='humor'>humor</option>
                            <option value='imagination'>imagination</option>
                            <option value='inspirational'>inspirational</option>
                            <option value='intelligence'>intelligence</option>
                            <option value='jealousy'>jealousy</option>
                            <option value='leadership'>leadership</option>
                            <option value='learning'>learning</option>
                            <option value='life'>life</option>
                            <option value='love'>love</option>
                            <option value='marriage'>marriage</option>
                            <option value='mom'>mom</option>
                            <option value='money'>money</option>
                            <option value='success'>success</option>
                        </select>
                     </blockquote>;

    return (
        <main>
            <div className="line-design"></div>
            {quotes === null ?
                loading :
                Object.keys(quotes).length === 0 ?
                    noQuotes :
                    <QuoteBox
                        quotes={quotes}
                        handleGetNewQuotes={handleGetNewQuotes}
                    />}
        </main>
    )
}

// {
//     quotes === '' ?
//     loading :
//     quotes === {} ?
//         noQuotes :
//         <QuoteBox
//             quotes={quotes}
//             handleGetNewQuotes={handleGetNewQuotes}
//         />
// }
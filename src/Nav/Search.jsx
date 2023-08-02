// All state and handlers for search are lifted into the app component

export default function Search(props) {

    return (
        <div className="search-container">
            <label htmlFor='search-box'>Search quotes by topic: </label>
            <input id='search-box'
                type='text'
                maxLength='20'
                placeholder="Enter a topic..."
                name='search-query'
                value={props.searchQuery}
                onChange={(e) => { props.changeSearchQuery(e.target.value)}}
            />
            <button
                // disabled={searchQuery === '' ? true : false}
                onClick={(e) => { props.handleSearchQuery() }}
            >Search</button>
        </div>
    )
}
function NoResults({ criteria }) {
    return (
        <div className='noResults'>
            <img src="./no-results.png" alt="no-results" />
            <p >No results found for "{criteria}"</p>
    </div>
    );
}

export default NoResults;
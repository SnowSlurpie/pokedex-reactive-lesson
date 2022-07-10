import Container from './container'

const SearchForm = () => {
return (
    <form onSubmit={props.handleFormSubmit}>
        <Container>
        <input
            value={props.searchTerm}
            onChange={props.handleInputChange}
            placeholder="Search a Pokemon"
            type="text"
        />
        {props.searchTerm && (
            <button 
            onClick={props.searchTerm}
            type="button"
            >
                Clear
            </button>
        )}
    
        </Container>
    </form>
)
}
export default SearchForm
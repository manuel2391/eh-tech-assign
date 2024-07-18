import "./search.css"
import search from "../../assets/search.svg"

type SearchProps = {
    value: string;
    placeholder:string;
    onSearch ? : (value:string)=> void ;
}

const Search = (props:SearchProps) => {

    const handleOnChange = (event :  React.ChangeEvent<HTMLInputElement>) => {
        if(props.onSearch){
            props.onSearch(event.target.value)
        }
    }

    return(
        <>
            <div className="search-bar w-full flex">
                <img className="search-icon flex-none self-center" src={search}/>
                <input name="search" type="text" className="search-input grow" value={props.value} onChange={handleOnChange} placeholder={props.placeholder}/>
            </div>
        </>
    )
}

export default Search;
import React, {useRef} from 'react';
import './Search.css';

const Search = (props) => {
    const searchRef = useRef(null);
    const getSearchquery = () => {
        if(searchRef.current.value.trim().length) {
            props.onchange(searchRef.current.value.trim());
        }
    };

    return (
        <section className="search">
            <div className="container">
                <div className="search__group form-group form-group-addon">
                    <input type="text" className="form-control" placeholder="Search by event Title ..." ref={searchRef} onKeyUp={getSearchquery} />
                    <span onClick={getSearchquery}>
                        <img src="/images/search.svg" alt="search icon" />
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Search;
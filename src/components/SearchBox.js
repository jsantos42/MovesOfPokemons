import {Component} from "react";

const SearchBox = ({onTyping}) => {
    return <input type={'text'}
                  placeholder={'type the Pokemon name'}
                  onChange={onTyping}/>
}

export default SearchBox;
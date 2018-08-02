import React from "react"
import ReactDOM from "react-dom"
import SearchBar from "./components/search_bar"
import YTSearch from 'youtube-api-search'

const API_KEY = "AIzaSyD46zrm7vSd6zHLdLuW-sh5_PSqlxnT83k";

YTSearch({key: API_KEY, term: "react redux"}, function (data) {
    console.log(data)
});

const App = () => <div><SearchBar/></div>;


ReactDOM.render(<App/>, document.querySelector('.container'));
import React from "react"
import ReactDOM from "react-dom"
import SearchBar from "./components/search_bar"

const API_KEY = "AIzaSyD46zrm7vSd6zHLdLuW-sh5_PSqlxnT83k";
SearchBar.valueOf();
const App = () => <div><SearchBar/></div>;


ReactDOM.render(<App/>, document.querySelector('.container'));
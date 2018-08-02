import React, {Component} from "react"
import ReactDOM from "react-dom"
import SearchBar from "./components/search_bar"
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'

const API_KEY = "AIzaSyD46zrm7vSd6zHLdLuW-sh5_PSqlxnT83k";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {videos: []};

        YTSearch({key: API_KEY, term: "react redux"}, videos => {
            this.setState({videos});
        });
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
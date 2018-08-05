import React, {Component} from "react"
import ReactDOM from "react-dom"
import SearchBar from "./components/search_bar"
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from "./components/video_detail"
import _ from "lodash"

const API_KEY = "AIzaSyD46zrm7vSd6zHLdLuW-sh5_PSqlxnT83k";

const initialSearchTerm = "react redux";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {videos: [], selectedVideo: null};
        this.videoSearch();
    }

    videoSearch(term = initialSearchTerm) {
        YTSearch({key: API_KEY, term: term}, videos => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {

        const videoSearch = _.debounce((term) => {
                this.videoSearch(term)
            }, 300
        );
        return (
            <div>
                <SearchBar
                    onSearchTermChange={term => videoSearch(term)}
                    startingValue={initialSearchTerm}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos}
                           onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
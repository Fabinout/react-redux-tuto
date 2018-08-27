import React, {Component} from "react"
import SearchBar from "./components/search_bar"
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from "./components/video_detail"
import _ from "lodash"

const API_KEY = "AIzaSyDhnAMdrwDXsX-3kayM6Ej8ihcu0OFDnhA";
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

export default App;
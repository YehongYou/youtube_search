import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';

const API_KEY = 'AIzaSyDFSKp4Fk_ubJJBU-AbZeVIKNaXcBZsEn4';

class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('one punch');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term:term}, (videos)=>{
      console.log(videos);
      this.setState({
        videos:videos,
        selectedVideo:videos[0]
      });
    });
  }

  render(){
    // const videoSearch = _.debounce((term)=> {this.videoSearch(term)}, 300);
     //  <SearchBar onSearchTermChange={(term)=> {this.videoSearch(term)}} />
    return(
      <div>
       <SearchBar onSearchTermChange={this.videoSearch=this.videoSearch.bind(this)} />

       <VideoDetail video={this.state.selectedVideo} />
       <VideoList
          onVideoSelect={(selectedVideo) => this.setState({selectedVideo:selectedVideo}) }
          videos={this.state.videos}/>
      </ div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));

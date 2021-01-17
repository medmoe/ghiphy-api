import './App.css';
import React, {Component} from 'react';
import NavBar from './components/NavBar';
import GifCard from './components/GifCard';
import axios from 'axios';

const API_KEY = "scjMtobyqmso5zawWcZSGswE7q4Xd9pA";
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      gifs : [], 
      term : '',
      removeTrending: false
    }
    this.getGifs = this.getGifs.bind(this);
    this.getText = this.getText.bind(this);
  }
  componentDidMount(){
    axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`)
      .then ( response => {
       this.setState({
         gifs : response.data.data.map((e, i) => {
          return <GifCard key={i} url = {e.images.downsized.url} /> })
       })
      })
      .then ( error => {
        console.log(error)
      })
  }
  getGifs(){
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.term}&api_key=${API_KEY}`)
      .then ( response => {
        this.setState({
          gifs : response.data.data.map((e, i) => {
           return <GifCard key={i} url = {e.images.downsized.url} /> })
        })
      })
      .then ( error => {
        console.log(error);
      })
  }
  getText(event){
    this.setState({
      term: event.target.value
    })
  }
  render(){
    return <div>
        <NavBar getText = {this.getText}
                getGifs = {this.getGifs}/>
                <div>
                {this.state.gifs}
                </div>
    </div>

  }
}

export default App;

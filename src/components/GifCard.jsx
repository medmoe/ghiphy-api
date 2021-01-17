import React, {Component} from 'react';

class GifCard extends Component{
    render(){
        return<img src={this.props.url} alt="this is an image" className="gifCard" width="200px" height="180px"></img>
    }
}

export default GifCard;
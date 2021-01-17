import React, {Component} from 'react';

class NavBar extends Component{
    render(){
        return <div>
            <div className="banner">
                <p>Gif Finder</p>
            </div> 
            <div className="search-bar">
                <input type="text" onChange={this.props.getText}></input>
                <button onClick ={this.props.getGifs}>search</button>
            </div>
            
        </div>
    }
}

export default NavBar;
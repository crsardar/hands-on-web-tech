
import React, {Component} from 'react';

class ImageItems extends Component{
    
    render(){

        return(
            <img alt={this.props.name} src={this.props.url}></img>
        )
    }
}

export default ImageItems;
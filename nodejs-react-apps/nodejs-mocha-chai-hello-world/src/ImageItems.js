
import React, {Component} from 'react';

class ImageItems extends Component{
    
    remove(){

        console.log("ImageItems : remove() : name = ".concat(this.props.name))
        this.props.removeAction(this)
    }
    
    render(){

        console.log("ImageItems : render()")
        return(
            <li>
                {this.props.name}
                <br></br>
                <img src={this.props.url} alt={this.props.name}></img>
                <br></br>
                <button onClick={this.remove.bind(this)}>Remove Image</button>
            </li>
        )
    }
}

export default ImageItems;
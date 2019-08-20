import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import ImageItems from './ImageItems'

class App extends Component {

  constructor(props){

    super(props)
    var imegeOne = new ImageItems(0, "Image0", "https://www.w3schools.com/images/w3schools_green.jpg", this.remodeElement.bind(this))
    var imegeTwo = new ImageItems(0, "Image0", "https://www.w3schools.com/images/w3schools_green.jpg", this.remodeElement.bind(this))
    this.state = {listItems:[imegeOne, imegeTwo]}
    console.log(this.state.listItems)
  }

  remodeElement(imageItems){

  }

  render(){
     console.log("Component : render()")
    var item = this.state.listItems[0]
    return(
      // <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="test"></img>
       <ul>
         <ImageItems id={this.state.listItems[0].id} name={this.state.listItems[0].name} url={this.state.listItems[0].ul} removeAction={this.state.listItems[0].removeAction}/>        
      </ul>
    )
  }
}

export default App;


import React, {Component} from 'react';
import './App.css';
import ImageItems from './ImageItems'

class App extends Component {

 imageUrl = "https://www.w3schools.com/images/w3schools_green.jpg"

  constructor(props){

    super(props)
    
    var contentOn = new Content(0, "Image0", this.imageUrl)
    var contentTwo = new Content(1, "Image1", this.imageUrl)
    this.state = {listItems:[contentOn, contentTwo]}
    console.log(this.state.listItems)
  }

  remodeElement(imageItems){

  }

  render(){
    //  console.log("Component : render()")
    //  console.log("ListItems : ".concat(this.state.listItems))
    return(
      <div>
      <img src={this.imageUrl} alt="aa"></img>
      <div>
          {this.state.listItems.map(function(item) {
            return (<ImageItems id={item.id} name={item.name} ulr={item.url}/>)
            })
          }
        </div>
      </div>
    )
  }
}

class Content{
  constructor(id, name, url){
    this.id = id
    this.name = name
    this.url = url
  }
}
export default App;

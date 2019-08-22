
import React, {Component} from 'react';

import './App.css';
import Images from './Images'

class App extends Component {

 imageUrl = "https://www.w3schools.com/images/w3schools_green.jpg"
 ids = 0

  constructor(props){

    super(props)
    
    var contentOn = new Content(this.ids, "Image0", this.imageUrl)
    this.ids = this.ids + 1
    var contentTwo = new Content(this.ids, "Image1", this.imageUrl)
    this.state = {listItems:[contentOn, contentTwo]}
    console.log(this.state.listItems)
  }

  removeElement(imageItems){

    var name = imageItems.props.name
    console.log("App : removeElement : name = " + name)

    var newContents = this.state.listItems.filter((item)=> item.name.search(name) === -1)
    this.setState({listItems : newContents})
  }

  onAdd(){

    var inputField = document.getElementById("inputField")
    var textValue = inputField.value
    
    console.log("App : onAdd : textValue = " + textValue)
    
    if(textValue){

      this.ids = this.ids + 1
      var content = new Content(this.ids, textValue, this.imageUrl)
      var newContents = this.state.listItems
      newContents = newContents.concat(content)
      this.setState({listItems : newContents})
      inputField.value = ""
    }
}

  render(){

    console.log("App : render()")
    return(
      <div>
        <Images listItems={this.state.listItems}removeAction={this.removeElement.bind(this)}/>
        <input id="inputField" placeholder="New Image Name"></input>
        <button onClick={this.onAdd.bind(this)}>Add</button>
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

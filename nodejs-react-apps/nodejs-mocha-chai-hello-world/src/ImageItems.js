
var React = require("react")

class ImageItems extends Comment{
    
    constructor(props){
        super(props)
    }
    constructor(props, id, name, url, removeAction){
        super(props)
        this.id = id
        this.name = name
        this.url = url
        this.removeAction = removeAction
    }

    render(){

        return(
            <img src={this.props.url} alt={this.props.name}></img>
        )
    }
}

export default ImageItems;
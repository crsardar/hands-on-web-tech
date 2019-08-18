
var React = require('react')

class Counter extends React.Component{

    constructor(props){
        super(props)
        this.state = {noOfClicks : 0}
    }

    onClick(){
        var clicks = this.state.noOfClicks + 1
        this.setState({noOfClicks: clicks})
        var clickCount = document.getElementById("noOfClicks")
        clickCount.innerHTML = clicks
    }

    render(){
        return(
                <div>
                    Number of Click/s = <span id="noOfClicks">0</span>
                    <br></br>
                    <button  type="button" onClick={this.onClick.bind(this)}>Click Me</button>
                </div>
            )
    }
}

export default Counter
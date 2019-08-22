
import React, {Component} from 'react';

import ImageItems from './ImageItems'

class Images extends Component{

    render(){
        var removeAction = this.props.removeAction
        return(<ul>
          {this.props.listItems.map(function(item) {
            return (<ImageItems id={item.id} name={item.name} url={item.url} key={item.id} removeAction={removeAction}/>)
            })
          }
        </ul>
        )
    }
}

export default Images
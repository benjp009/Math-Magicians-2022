import React, {Component} from 'react';

class Display extends Component {
    render(){
        return(
            <div className="Display">
                {this.props.data}
            </div>
        );
    }
}

export default Display;

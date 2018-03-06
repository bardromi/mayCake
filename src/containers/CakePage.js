import React, {Component} from 'react';

class CakePage extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>CakeCard ID - {this.props.match.params.id}</h1>
            </div>
        )
    }
}

export default CakePage;




// const CakeCard = (props) => (
//     <div>
//         <h1>CakeCard ID - {props.match.params.id}</h1>
//     </div>
// );


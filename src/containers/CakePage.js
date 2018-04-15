import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCakeById} from '../actions/CakeAction'

class CakePage extends Component {

    // constructor(props) {
    //     super(props)
    // }

    componentWillMount() {
        this.props.getCakeById(this.props.match.params.id);
    }

    render() {
        if (this.props.cake.isLoading !== false) {
            return <p>Loading...</p>
        }

        return (
            <div>
                <h1>CakeCard ID - {this.props.cake.cake.id}</h1>
            </div>
        )
    }
}

function mapStateToProps(store) {
    return {
        cake: store.cakepage
    };
}

export default connect(mapStateToProps, {getCakeById})(CakePage);

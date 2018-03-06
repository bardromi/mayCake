import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllCakes} from '../actions/CakeAction';
import CakeCard from "../components/CakeCard";

class Home extends Component {

    componentWillMount() {
        this.props.getAllCakes();
    }

    render() {
        console.log('cakes', this.props.cake.cakes);

        if (this.props.cake.isLoading) {
            console.log('Loading........................................');
            return <p>Loading...</p>
        }

        return (
            <div>
                <div className="row">
                    <div className="card-deck">
                            {
                                this.props.cake.cakes && this.props.cake.cakes.map((cake, index) => {
                                    return (
                                        <CakeCard key={index} cake={cake}/>
                                    )
                                })
                            }
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(store) {
    return {
        cake: store.cake
    };
}

export default connect(mapStateToProps, {getAllCakes})(Home)

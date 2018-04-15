import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllCakes} from '../actions/CakeAction';
import CakeCard from "../components/CakeCard";

class Home extends Component {

    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         isLoaded: false
    //     }
    // }

    componentWillMount() {
        this.props.getAllCakes();
    }

    render() {
        if (this.props.cakes.isLoading !== false) {
            return <p>Loading...</p>
        }

        return (
            <div>
                <div className="row">
                    <div className="card-deck">
                        {
                            this.props.cakes.cakes && this.props.cakes.cakes.map((cake, index) => {
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
        cakes: store.home
    };
}

export default connect(mapStateToProps, {getAllCakes})(Home)

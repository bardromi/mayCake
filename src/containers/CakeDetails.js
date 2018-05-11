import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCakeById} from '../actions/CakeAction'

class CakeDetails extends Component {

    // constructor(props) {
    //     super(props)
    // }

    componentDidMount() {
        this.props.getCakeById(this.props.match.params.id);
    }

    render() {
        if (this.props.isLoading !== false) {
            return <p>Loading...</p>
        }

        return (
            <div>
                {/*<h1>CakeCard ID - {this.props.cake.id}</h1>*/}
                <div className="row">
                    <div className="col-sm-6">
                        <div className="row item">
                            <img className="rounded pt-5"
                                 id="img_details"
                                 src={this.props.cake.img}
                                 alt={this.props.cake.name}/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="text-center">
                            <h1>{this.props.cake.name}</h1>
                            <h3>{this.props.cake.description}</h3>
                        </div>
                        <br/>
                        <div className="text-right">
                            {this.props.cake.gradiants}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(store) {
    return {
        cake: store.cakepage.cake,
        isLoading: store.cakepage.isLoading
    };
}

export default connect(mapStateToProps, {getCakeById})(CakeDetails);

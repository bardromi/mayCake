import React from 'react';

const CakeCard = (props) => {
    return (
        <div className="col-md-3">
            <div className="card mb-5">
                <h5 className="card-title text-center pt-2">{props.cake.name}</h5>
                <hr/>
                <a href="#">
                    <img className="card-img-top ml-1"
                         src={props.cake.img}
                         alt={props.cake.name}/>
                </a>

                <div className="card-body">
                    <i className="far fa-thumbs-up fa-lg fa-pull-right"></i>
                    <span>{props.cake.likes}</span>
                </div>
            </div>
        </div>
    )
};

export default CakeCard;
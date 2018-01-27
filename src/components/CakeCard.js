import React from 'react';

const CakeCard = (props) => {
    return (
        <div className="col-md-3">
            <div className="card mb-5">
                <h5 className="card-title text-center pt-2">Chocolate Cake</h5>

                <a href="#">
                    <img className="card-img-top"
                         src={props.cake.img}
                         alt={props.cake.name}/>
                </a>

                <div className="card-body">
                    <i className="far fa-thumbs-up fa-lg fa-pull-right"></i>
                    <span>10 likes</span>
                </div>
            </div>
        </div>
    )
};

export default CakeCard;
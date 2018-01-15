import React from 'react';

const Home = () => (
    <div className="row">
        <div className="col-md-3">
            <div className="card mb-5">
                <h5 className="card-title text-center pt-2">Chocolate Cake</h5>
                <a href="#">
                    <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAtutm6NaoBbTY5Vli75zaAWwwDKf7bfPecSBEhMHCvdSS3dJx" alt="Card cap"/>
                </a>
                <div className="card-body">
                    <i className="far fa-thumbs-up fa-lg fa-pull-right"></i>
                    <span>10 likes</span>
                </div>
            </div>
        </div>
    </div>
);

export default Home

import React from 'react';

function Card(props) {
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="card bg-white shadow-lg mb-lg-0 mb-4">
                <div className="card-body text-center text-justify">
                    <p className="card-text emoji">{props.emoji}</p>
                    <p className="card-text emoji-heading">{props.heading}</p>
                    <p className="card-text emoji-description">{props.desc}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
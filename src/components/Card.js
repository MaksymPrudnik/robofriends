import React from 'react';

const Card = ({id, name, email}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' style={{maxWidth: '250px', flex: '1'}}>
            <img alt='robo' src={`https://robohash.org/${id}`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
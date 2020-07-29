import React from 'react';

const Card = ({id, name, email}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' style={{maxWidth: '250px', flex: '1'}}>
            <img
                alt='robo'
                srcSet={`https://robohash.org/${id}?size=218x218 1x,
                         https://robohash.org/${id}?size=436x436 2x,
                         https://robohash.org/${id}?size=654x654 3x`}
                src={`https://robohash.org/${id}?size=218x218`}
            ></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
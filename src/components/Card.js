import React from "react";


const Card = ({name , email , id }) => {
    //const {name , email , id }= props;
    // inside return is not html its jsx
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='robots' src={`https://robohash.org/${id}?200*200`/*props.id*/}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                </div>
        </div>
    );
}

export default Card;

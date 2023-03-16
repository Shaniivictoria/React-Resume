import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import { Link } from 'react-router-dom';

function Portfolio(){
    return(
        <div className="portfolio">
       
       <img class="picture" src="/img/zombie.png" alt='zombie Picture'/>
       <p>Hi There!</p><br />
       <p>Do you want to play?</p><br />
       <a href="https://shani-victoria10012.netlify.app"><button>Click me</button></a>
        </div>
    );

};

export default Portfolio;
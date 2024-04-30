import React from "react";
import { images } from "../data/CarouselData";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Carousel.css";

// implement the class below

class Carousel extends React.Component {
    constructor() {
        super();
        this.state = {
            curIndex: 0
        };
    }

    MoveRight = () => {
        const newIndex = (this.state.curIndex + 1) % images.length;
        this.setState({ curIndex: newIndex });
    };

    MoveLeft = () => {
        const newIndex = this.state.curIndex === 0 ? images.length - 1 : this.state.curIndex - 1;
        this.setState({ curIndex: newIndex });
    };

    render() {
        
    const { curIndex } = this.state;
    return (
        <>
        <div className="container">
                <div className="leftarrow" onClick={this.MoveLeft}>
                    <ArrowBackIosIcon className="arrow"/>
                </div>
                <h1 className="title">{images[curIndex].title}</h1>
                <img src={images[curIndex].img} alt={images[curIndex].title}/>
                <h3 className="subtitle">{images[curIndex].subtitle}</h3>
                <div className="rightarrow" onClick={this.MoveRight}>
                    <ArrowForwardIosIcon className="arrow"/>
                </div>
        </div>
        </>
    );
    }
}

export default Carousel;

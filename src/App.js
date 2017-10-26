import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import logo from './logo.svg';
import './App.css';
import Mycomponent from './Mycomponent'
import {increase, getCounter} from "./file1";


// increase();
//increase();

//console.log(getCounter());

export default class extends React.Component {
    render() {
        return (


            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={3}
            >
                <Slider>
                    <Slide index={0}><img src={require('./img/malenkij-kotik-s-vnimatelnym-vzglyadom.jpg')}/></Slide>
                    <Slide index={1}><img src={require('./img/maxresdefault.jpg')}/></Slide>
                    <Slide index={2}><img src={require('./img/maxresdefault (1).jpg')}/></Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
        );
    }
}
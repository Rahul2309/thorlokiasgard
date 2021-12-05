import React, { Component } from "react";
import Slider from "react-slick";

export default class AboutSlider extends Component {
  render() {
    const settings = {
      dots: true,
    //   dotsClass:"slick-dots",
      infinite: true,
      speed: 500,
      arrows:false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed:2500
    };
    return (
               <div class="learn__about__img">
                  <div class="slick-slider slick-initialized" dir="ltr">
                  <Slider {...settings}>
                      {/* <div class="slick-track"
                        style={{width: "4410px", opacity: 1, transform: "translate3d(-1960px, 0px, 0px)"}}> */}
                         <div data-index="0" class="slick-slide" tabindex="-1" aria-hidden="true"
                          style={{outline: "none", width: "490px"}}>
                          <div>
                            <div class="learn__about__img ds-inline" tabindex="-1" >
                              <img src={require('../images/learnabout.jpg')} alt="learnabout"/><button
                                class="btn video__btn"><svg aria-hidden="true" focusable="false" data-prefix="fas"
                                  data-icon="play" class="svg-inline--fa fa-play fa-w-14 " role="img"
                                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                  <path fill="currentColor"
                                    d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z">
                                  </path>
                                </svg></button></div>
                          </div>
                        </div>
                        <div data-index="-1" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                          style={{width: "490px"}}>
                          <div>
                            <div class="learn__about__img  ds-inline" tabindex="-1" >
                              <img src={require('../images/learnabout.jpg')} alt="learnabout"/>0</div>
                          </div>
                        </div>
                       
                        <div data-index="1" class="slick-slide" tabindex="-1" aria-hidden="true"
                          style={{outline: "none", width: "490px"}}>
                          <div>
                            <div class="learn__about__img  ds-inline" tabindex="-1" >
                              <img src={require('../images/learnabout.jpg')} alt="learnabout"/>0</div>
                          </div>
                        </div>
                        <div data-index="2" class="slick-slide" tabindex="-1" aria-hidden="true"
                          style={{outline: "none", width: "490px"}}>
                          <div>
                            <div class="learn__about__img  ds-inline" tabindex="-1" >
                              <img src={require('../images/learnabout.jpg')}  alt="learnabout"/><button
                                class="btn video__btn"><svg aria-hidden="true" focusable="false" data-prefix="fas"
                                  data-icon="play" class="svg-inline--fa fa-play fa-w-14 " role="img"
                                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                  <path fill="currentColor"
                                    d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z">
                                  </path>
                                </svg></button></div>
                          </div>
                        </div>
                        <div data-index="3" class="slick-slide slick-active slick-current" tabindex="-1"
                          aria-hidden="false" style={{outline: "none", width: "490px"}}>
                          <div>
                            <div class="learn__about__img  ds-inline" tabindex="-1" >
                              <img src={require('../images/learnabout.jpg')}  alt="learnabout"/>0</div>
                          </div>
                        </div>
                        <div data-index="4" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                          style={{width: "490px"}}>
                          <div>
                            <div class="learn__about__img  ds-inline" tabindex="-1" >
                              <img src={require('../images/learnabout.jpg')}  alt="learnabout"/><button
                                class="btn video__btn"><svg aria-hidden="true" focusable="false" data-prefix="fas"
                                  data-icon="play" class="svg-inline--fa fa-play fa-w-14 " role="img"
                                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                  <path fill="currentColor"
                                    d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z">
                                  </path>
                                </svg></button></div>
                          </div>
                        </div>
                        <div data-index="5" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                          style={{width: "490px"}}>
                          <div>
                            <div class="learn__about__img  ds-inline" tabindex="-1" >
                              <img src={require('../images/learnabout.jpg')}  alt="learnabout"/>0</div>
                          </div>
                        </div>
                        <div data-index="6" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                          style={{width: "490px"}}>
                          <div>
                            <div class="learn__about__img  ds-inline" tabindex="-1" >
                              <img src={require('../images/learnabout.jpg')}  alt="learnabout"/><button
                                class="btn video__btn"><svg aria-hidden="true" focusable="false" data-prefix="fas"
                                  data-icon="play" class="svg-inline--fa fa-play fa-w-14 " role="img"
                                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                  <path fill="currentColor"
                                    d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z">
                                  </path>
                                </svg></button></div>
                          </div>
                        </div>
                        <div data-index="7" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                          style={{width: "490px"}}>
                          <div>
                            <div class="learn__about__img  ds-inline" tabindex="-1" >
                              <img src={require('../images/learnabout.jpg')}  alt="learnabout"/>0</div>
                          </div>
                        </div>
                      {/* </div> */}
                      </Slider >
                    {/* <ul class="slick-dots" style={{display: "block"}}>
                      <li class=""><button>1</button></li>
                      <li class=""><button>2</button></li>
                      <li class=""><button>3</button></li>
                      <li class="slick-active"><button>4</button></li>
                    </ul> */}
                  </div>
                </div>
    );
  }
}
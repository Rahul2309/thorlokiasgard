import React, { Component, useState } from "react";
import Slider from "react-slick";
import configData from "../utils/config.json"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed:2500
    };
    
    return (
        <div class="container">
             
        <div class="row row__reverce">
          <div class="col-lg-6">
            <div class="slider__inner">
              <div class="slick-slider slick-initialized" dir="ltr">
                  {/* <button type="button" data-role="none" class="slick-arrow slick-next" style={{display: "block"}}>
                  Next</button> */}
                 <Slider {...settings}>
                  
                    <div data-index="0" class="slick-slide" tabindex="-1" aria-hidden="true"
                      style={{outline: "none", width: "510px"}}>
                      <div>
                        <div class="single__slider  ds-inline" tabindex="-1" >
                          <div class="video__modal"><button class="btn video__btn"><svg aria-hidden="true"
                                focusable="false" data-prefix="fas" data-icon="play"
                                class="svg-inline--fa fa-play fa-w-14 " role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor"
                                  d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z">
                                </path>
                              </svg></button></div>
                          <h1><span class="above__title">We Are Child Care </span>Professional</h1>
                          <p class="slider__para">You must know that there is nothing higher and stronger and more
                            wholesome and good for life in the future than some good memory, specially a memory of
                            childhood.</p>
                          <div class="slider__btns"><a class="cmn__btn" href={configData.SITE_URL}>Apply
                              Now</a><a class="learn__btn cmn__btn" href={configData.SITE_URL}>Learn More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-index="-1" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                      style={{width: "510px"}}>
                      <div>
                        <div class="single__slider  ds-inline" tabindex="-1" >
                          <div class="video__modal"></div>
                          <h1><span class="above__title">We Are Child Care </span>Professional</h1>
                          <p class="slider__para">You must know that there is nothing higher and stronger and more
                            wholesome and good for life in the future than some good memory, specially a memory of
                            childhood.</p>
                          <div class="slider__btns"><a class="cmn__btn" href={configData.SITE_URL}>Apply
                              Now</a><a class="learn__btn cmn__btn" href={configData.SITE_URL}>Learn More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-index="1" class="slick-slide" tabindex="-1" aria-hidden="true"
                      style={{outline: "none", width: "510px"}}>
                      <div>
                        <div class="single__slider  ds-inline" tabindex="-1" >
                          <div class="video__modal"></div>
                          <h1><span class="above__title">We Are Child Care </span>Professional</h1>
                          <p class="slider__para">You must know that there is nothing higher and stronger and more
                            wholesome and good for life in the future than some good memory, specially a memory of
                            childhood.</p>
                          <div class="slider__btns"><a class="cmn__btn" href={configData.SITE_URL}>Apply
                              Now</a><a class="learn__btn cmn__btn" href={configData.SITE_URL}>Learn More</a>
                          </div>
                        </div>
                      </div>
                    </div> 
                    <div data-index="2" class="slick-slide ol-none" tabindex="-1" aria-hidden="true">
                      <div>
                        <div class="single__slider  ds-inline" tabindex="-1" >
                          <div class="video__modal"><button class="btn video__btn"><svg aria-hidden="true"
                                focusable="false" data-prefix="fas" data-icon="play"
                                class="svg-inline--fa fa-play fa-w-14 " role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor"
                                  d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z">
                                </path>
                              </svg></button></div>
                          <h1><span class="above__title">We Are Child Care </span>Professional</h1>
                          <p class="slider__para">You must know that there is nothing higher and stronger and more
                            wholesome and good for life in the future than some good memory, specially a memory of
                            childhood.</p>
                          <div class="slider__btns"><a class="cmn__btn" href={configData.SITE_URL}>Apply
                              Now</a><a class="learn__btn cmn__btn" href={configData.SITE_URL}>Learn More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                 <div data-index="3" class="slick-slide slick-active slick-current" tabindex="-1"
                      aria-hidden="false" style={{outline: "none", width: "510px"}}>
                      <div>
                        <div class="single__slider  ds-inline" tabindex="-1" >
                          <div class="video__modal"></div>
                          <h1><span class="above__title">We Are Child Care </span>Professional</h1>
                          <p class="slider__para">You must know that there is nothing higher and stronger and more
                            wholesome and good for life in the future than some good memory, specially a memory of
                            childhood.</p>
                          <div class="slider__btns"><a class="cmn__btn" href={configData.SITE_URL}>Apply
                              Now</a><a class="learn__btn cmn__btn" href={configData.SITE_URL}>Learn More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-index="4" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                      style={{width: "510px"}}>
                      <div>
                        <div class="single__slider  ds-inline" tabindex="-1" >
                          <div class="video__modal"><button class="btn video__btn"><svg aria-hidden="true"
                                focusable="false" data-prefix="fas" data-icon="play"
                                class="svg-inline--fa fa-play fa-w-14 " role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor"
                                  d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z">
                                </path>
                              </svg></button></div>
                          <h1><span class="above__title">We Are Child Care </span>Professional</h1>
                          <p class="slider__para">You must know that there is nothing higher and stronger and more
                            wholesome and good for life in the future than some good memory, specially a memory of
                            childhood.</p>
                          <div class="slider__btns"><a class="cmn__btn" href={configData.SITE_URL}>Apply
                              Now</a><a class="learn__btn cmn__btn" href={configData.SITE_URL}>Learn More</a>
                          </div>
                        </div>
                      </div>
                    </div> 
                     <div data-index="5" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                      style={{width: "510px"}}>
                      <div>
                        <div class="single__slider  ds-inline" tabindex="-1" >
                          <div class="video__modal"></div>
                          <h1><span class="above__title">We Are Child Care </span>Professional</h1>
                          <p class="slider__para">You must know that there is nothing higher and stronger and more
                            wholesome and good for life in the future than some good memory, specially a memory of
                            childhood.</p>
                          <div class="slider__btns"><a class="cmn__btn" href={configData.SITE_URL}>Apply
                              Now</a><a class="learn__btn cmn__btn" href={configData.SITE_URL}>Learn More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-index="6" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                      style={{width: "510px"}}>
                      <div>
                        <div class="single__slider  ds-inline" tabindex="-1" >
                          <div class="video__modal"><button class="btn video__btn"><svg aria-hidden="true"
                                focusable="false" data-prefix="fas" data-icon="play"
                                class="svg-inline--fa fa-play fa-w-14 " role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor"
                                  d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z">
                                </path>
                              </svg></button></div>
                          <h1><span class="above__title">We Are Child Care </span>Professional</h1>
                          <p class="slider__para">You must know that there is nothing higher and stronger and more
                            wholesome and good for life in the future than some good memory, specially a memory of
                            childhood.</p>
                          <div class="slider__btns"><a class="cmn__btn" href={configData.SITE_URL}>Apply
                              Now</a><a class="learn__btn cmn__btn" href={configData.SITE_URL}>Learn More</a>
                          </div>
                        </div>
                      </div>
                    </div> 
                     <div data-index="7" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                      style={{width: "510px"}}>
                      <div>
                        <div class="single__slider  ds-inline" tabindex="-1" >
                          <div class="video__modal"></div>
                          <h1><span class="above__title">We Are Child Care </span>Professional</h1>
                          <p class="slider__para">You must know that there is nothing higher and stronger and more
                            wholesome and good for life in the future than some good memory, specially a memory of
                            childhood.</p>
                          <div class="slider__btns"><a class="cmn__btn" href={configData.SITE_URL}>Apply
                              Now</a><a class="learn__btn cmn__btn" href={configData.SITE_URL}>Learn More</a>
                          </div>
                        </div>
                      </div>
                    </div> 
                 </Slider>
                {/* <button type="button" data-role="none" class="slick-arrow slick-next" style={{display: "block"}}>
                  Next</button> */}
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="slider__image"><img src={require('../images/slider.svg')} alt="" class="img-fluid"/></div>
          </div>
        </div>
      </div>
    );
  }
}
import React from 'react';
import PropTypes from 'prop-types';
import configData from "../utils/config.json";
import SimpleSlider from './HomeSlider';
import AboutSlider from "./AboutSlider"
function Home(props) {
    return (
        <div class="home__wrapper">
        <div class="slider__wrapper">
        <SimpleSlider/>
          <div class="slider__side__color"><img src={require('../images/kid2.svg')} alt=""/></div>
          <div class="slider__side__color1"><img src={require('../images/kid1.svg')} alt=""/></div>
        </div>
        <div class="learn__about__wrapper padding__top">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
              <AboutSlider/>
              </div>
              <div class="col-lg-6">
                <div class="learn__right">
                  <div class="up__art"><img src={require('../images/up.svg')}  alt=""/></div>
                  <div class="section__title__container">
                    <h5 class="section__subtitle">Education For Everyone</h5>
                    <h2 class="section__title">Learn About Our Work Culture At Devschool</h2>
                    <p class="section__contnet">As a word from our heart, we love to dedicate for Kids the valuable
                      things in Life. A great education is a must for a solid developments in both soul and mind for
                      kids. We go with kids to play, learn, and grow better.</p>
                  </div>
                  <ul class="list__content">
                    <li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle"
                        class="svg-inline--fa fa-check-circle fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path fill="currentColor"
                          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                        </path>
                      </svg>Transportation</li>
                    <li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle"
                        class="svg-inline--fa fa-check-circle fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path fill="currentColor"
                          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                        </path>
                      </svg>Nutritious Food</li>
                    <li> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle"
                        class="svg-inline--fa fa-check-circle fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path fill="currentColor"
                          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                        </path>
                      </svg>Outdoor Games</li>
                    <li> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle"
                        class="svg-inline--fa fa-check-circle fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path fill="currentColor"
                          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                        </path>
                      </svg>Best Care</li>
                  </ul>
                  <p class="learn__contnet2">As a word from our heart, we love to dedicate for Kids the valuable things
                    in Life . We go with kids to play, learn, and grow better.</p>
                  <h5 class="have__q3">Have a question?<a class="start__free" href={configData.SITE_URL}>Get Started
                      Free</a></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="service__wrapper padding__top__botton">
          <div class="side__img__wal"><img src={require('../images/side0.svg')} alt=""/></div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 offset-lg-4 mx-auto ">
                <div class="section__title__container text-center">
                  <h5 class="section__subtitle">Education For Everyone</h5>
                  <h2 class="section__title">Learn About Our Work Culture At Devschool</h2>
                  <p class="section__contnet margin__bottom">As a word from our heart, we love to dedicate for Kids the
                    valuable things in Life. A great education is a must for a solid developments in both soul and mind
                    for kids. We go with kids to play, learn, and grow better.</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <div class="service__inner">
                  <div class="service__innerimg"><img src={require('../images/service1.jpg')} alt="" class="img-fluid"/>
                  </div>
                  <div class="service__inner__content">
                    <div class="content__price">
                      <p>5K</p>
                    </div>
                    <h4 class="service__title"><a href={configData.SITE_URL}details>Pre-School Class</a></h4>
                    <ul class="service__blist">
                      <li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book"
                          class="svg-inline--fa fa-book fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512">
                          <path fill="currentColor"
                            d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z">
                          </path>
                        </svg>13 Lessons</li>
                      <li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker"
                          class="svg-inline--fa fa-map-marker fa-w-12 " role="img" xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512">
                          <path fill="currentColor"
                            d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z">
                          </path>
                        </svg>Alice Bohm , Linda Glendell</li>
                      <li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user"
                          class="svg-inline--fa fa-user fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512">
                          <path fill="currentColor"
                            d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z">
                          </path>
                        </svg>20 Students</li>
                    </ul>
                    <div class="service__enroll"><a href={configData.SITE_URL+"/enroll"}>Enroll Now<svg
                          aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right"
                          class="svg-inline--fa fa-angle-right fa-w-8 " role="img" xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 512">
                          <path fill="currentColor"
                            d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z">
                          </path>
                        </svg></a></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="service__innerimg"><img src={require('../images/service1.jpg')} alt="" class="img-fluid"/>
                </div>
                <div class="service__inner__content">
                  <div class="content__price">
                    <p>5K</p>
                  </div>
                  <h4 class="service__title"><a href={configData.SITE_URL+"/details"}>Pre-School Class</a></h4>
                  <ul class="service__blist">
                    <li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book"
                        class="svg-inline--fa fa-book fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path fill="currentColor"
                          d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z">
                        </path>
                      </svg>13 Lessons</li>
                    <li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker"
                        class="svg-inline--fa fa-map-marker fa-w-12 " role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512">
                        <path fill="currentColor"
                          d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z">
                        </path>
                      </svg>Alice Bohm , Linda Glendell</li>
                    <li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user"
                        class="svg-inline--fa fa-user fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path fill="currentColor"
                          d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z">
                        </path>
                      </svg>20 Students</li>
                  </ul>
                  <div class="service__enroll"><a href={configData.SITE_URL+"/enroll"}>Enroll Now<svg aria-hidden="true"
                        focusable="false" data-prefix="fas" data-icon="angle-right"
                        class="svg-inline--fa fa-angle-right fa-w-8 " role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 512">
                        <path fill="currentColor"
                          d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z">
                        </path>
                      </svg></a></div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="service__innerimg"><img src={require('../images/service1.jpg')} alt="" class="img-fluid"/>
                </div>
                <div class="service__inner__content">
                  <div class="content__price">
                    <p>5K</p>
                  </div>
                  <h4 class="service__title"><a href={configData.SITE_URL+"/details"}>Pre-School Class</a></h4>
                  <ul class="service__blist">
                    <li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book"
                        class="svg-inline--fa fa-book fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path fill="currentColor"
                          d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z">
                        </path>
                      </svg>13 Lessons</li>
                    <li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker"
                        class="svg-inline--fa fa-map-marker fa-w-12 " role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512">
                        <path fill="currentColor"
                          d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z">
                        </path>
                      </svg>Alice Bohm , Linda Glendell</li>
                    <li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user"
                        class="svg-inline--fa fa-user fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path fill="currentColor"
                          d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z">
                        </path>
                      </svg>20 Students</li>
                  </ul>
                  <div class="service__enroll"><a href={configData.SITE_URL+"/enroll"}>Enroll Now<svg aria-hidden="true"
                        focusable="false" data-prefix="fas" data-icon="angle-right"
                        class="svg-inline--fa fa-angle-right fa-w-8 " role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 512">
                        <path fill="currentColor"
                          d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z">
                        </path>
                      </svg></a></div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="service__innerimg"><img src={require('../images/service1.jpg')} alt="" class="img-fluid"/>
                </div>
                <div class="service__inner__content">
                  <div class="content__price">
                    <p>5K</p>
                  </div>
                  <h4 class="service__title"><a href={configData.SITE_URL+"/details"}>Pre-School Class</a></h4>
                  <ul class="service__blist">
                    <li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book"
                        class="svg-inline--fa fa-book fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path fill="currentColor"
                          d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z">
                        </path>
                      </svg>13 Lessons</li>
                    <li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker"
                        class="svg-inline--fa fa-map-marker fa-w-12 " role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512">
                        <path fill="currentColor"
                          d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z">
                        </path>
                      </svg>Alice Bohm , Linda Glendell</li>
                    <li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user"
                        class="svg-inline--fa fa-user fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path fill="currentColor"
                          d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z">
                        </path>
                      </svg>20 Students</li>
                  </ul>
                  <div class="service__enroll"><a href={configData.SITE_URL+"/enroll"}>Enroll Now<svg aria-hidden="true"
                        focusable="false" data-prefix="fas" data-icon="angle-right"
                        class="svg-inline--fa fa-angle-right fa-w-8 " role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 512">
                        <path fill="currentColor"
                          d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z">
                        </path>
                      </svg></a></div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="service__innerimg"><img src={require('../images/service1.jpg')} alt="" class="img-fluid"/>
                </div>
                <div class="service__inner__content">
                  <div class="content__price">
                    <p>5K</p>
                  </div>
                  <h4 class="service__title"><a href={configData.SITE_URL+"/details"}>Pre-School Class</a></h4>
                  <ul class="service__blist">
                    <li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book"
                        class="svg-inline--fa fa-book fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path fill="currentColor"
                          d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z">
                        </path>
                      </svg>13 Lessons</li>
                    <li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker"
                        class="svg-inline--fa fa-map-marker fa-w-12 " role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512">
                        <path fill="currentColor"
                          d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z">
                        </path>
                      </svg>Alice Bohm , Linda Glendell</li>
                    <li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user"
                        class="svg-inline--fa fa-user fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path fill="currentColor"
                          d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z">
                        </path>
                      </svg>20 Students</li>
                  </ul>
                  <div class="service__enroll"><a href={configData.SITE_URL+"/enroll"}>Enroll Now<svg aria-hidden="true"
                        focusable="false" data-prefix="fas" data-icon="angle-right"
                        class="svg-inline--fa fa-angle-right fa-w-8 " role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 512">
                        <path fill="currentColor"
                          d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z">
                        </path>
                      </svg></a></div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="service__innerimg"><img src={require('../images/service1.jpg')} alt="" class="img-fluid"/>
                </div>
                <div class="service__inner__content">
                  <div class="content__price">
                    <p>5K</p>
                  </div>
                  <h4 class="service__title"><a href={configData.SITE_URL+"/details"}>Pre-School Class</a></h4>
                  <ul class="service__blist">
                    <li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book"
                        class="svg-inline--fa fa-book fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path fill="currentColor"
                          d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z">
                        </path>
                      </svg>13 Lessons</li>
                    <li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker"
                        class="svg-inline--fa fa-map-marker fa-w-12 " role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512">
                        <path fill="currentColor"
                          d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z">
                        </path>
                      </svg>Alice Bohm , Linda Glendell</li>
                    <li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user"
                        class="svg-inline--fa fa-user fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path fill="currentColor"
                          d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z">
                        </path>
                      </svg>20 Students</li>
                  </ul>
                  <div class="service__enroll"><a href={configData.SITE_URL+"/enroll"}>Enroll Now<svg aria-hidden="true"
                        focusable="false" data-prefix="fas" data-icon="angle-right"
                        class="svg-inline--fa fa-angle-right fa-w-8 " role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 512">
                        <path fill="currentColor"
                          d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z">
                        </path>
                      </svg></a></div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="more__service text-center"><a href={configData.SITE_URL+"/moreproject"}>Discover More
                    Projects <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right"
                      class="svg-inline--fa fa-caret-right fa-w-6 " role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 192 512">
                      <path fill="currentColor"
                        d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z">
                      </path>
                    </svg></a></div>
              </div>
            </div>
          </div>
        </div>
        <div class="why__register__wrapper padding__bottom">
          <div class="container-fluid p-0">
            <div class="row no-gutters">
              <div class="col-lg-6">
                <div class="why__img"><img src={require('../images/whyregister.jpg')} alt=""/><button
                    class="btn video__btn"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play"
                      class="svg-inline--fa fa-play fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512">
                      <path fill="currentColor"
                        d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z">
                      </path>
                    </svg></button></div>
              </div>
              <div class="col-lg-6">
                <div class="why__right">
                  <div class="section__title__container">
                    <h5 class="section__subtitle1">Why Hesitate To Register?</h5>
                    <h2 class="section__title">We Are The Best Choice For Your Child</h2>
                    <p class="section__contnet">As a word from our heart, we love to dedicate for Kids the valuable
                      things in Life. A great education is a must for a solid developments in both soul and mind for
                      kids. We go with kids to play, learn, and grow better.</p>
                  </div>
                  <div class="list__options">
                    <div class="list__one">
                      <div class="list__one__half"><img src={require('../images/school.png')} alt=""/></div>
                      <div class="list__one__content">
                        <h5>Well Trained Professionals</h5>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                          invidunt ut labore et dolore</p>
                      </div>
                    </div>
                    <div class="list__one">
                      <div class="list__one__half"><img src={require('../images/teacher.png')} alt=""/></div>
                      <div class="list__one__content">
                        <h5>Well Trained Professionals</h5>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                          invidunt ut labore et dolore</p>
                      </div>
                    </div>
                    <div class="list__one">
                      <div class="list__one__half"><img src={require('../images/book.png')} alt=""/></div>
                      <div class="list__one__content">
                        <h5>Well Trained Professionals</h5>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                          invidunt ut labore et dolore</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="teacher__wrapper padding__bottom">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 offset-lg-4 mx-auto ">
                <div class="section__title__container text-center">
                  <h5 class="section__subtitle">Together We Can Create</h5>
                  <h2 class="section__title">Who Stand By Your Kids Always</h2>
                  <p class="section__contnet margin__bottom">As a word from our heart, we love to dedicate for Kids the
                    valuable things in Life. A great education is a must for a solid developments in both soul and mind
                    for kids. We go with kids to play, learn, and grow better.</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3">
                <div class="teacher__single">
                  <div class="teacher__img"><img src={require('../images/teacher1.jpg')} class="img-fluid" alt=""/></div>
                  <div class="teacher__content">
                    <div>
                      <h5>Loki</h5>
                      <h6>CEO</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="teacher__single">
                  <div class="teacher__img"><img src={require('../images/teacher2.jpg')} class="img-fluid" alt=""/></div>
                  <div class="teacher__content">
                    <div>
                      <h5>Thor</h5>
                      <h6>CTO</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="teacher__single">
                  <div class="teacher__img"><img src={require('../images/teacher1.jpg')} class="img-fluid" alt=""/></div>
                  <div class="teacher__content">
                    <div>
                      <h5>Loki</h5>
                      <h6>CEO</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="teacher__single">
                  <div class="teacher__img"><img src={require('../images/teacher2.jpg')} class="img-fluid" alt=""/></div>
                  <div class="teacher__content">
                    <div>
                      <h5>Thor</h5>
                      <h6>CTO</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="teacher__single">
                  <div class="teacher__img"><img src={require('../images/teacher1.jpg')} class="img-fluid" alt=""/></div>
                  <div class="teacher__content">
                    <div>
                      <h5>Loki</h5>
                      <h6>CEO</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="teacher__single">
                  <div class="teacher__img"><img src={require('../images/teacher2.jpg')} class="img-fluid" alt=""/></div>
                  <div class="teacher__content">
                    <div>
                      <h5>Thor</h5>
                      <h6>CTO</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="teacher__single">
                  <div class="teacher__img"><img src={require('../images/teacher1.jpg')} class="img-fluid" alt=""/></div>
                  <div class="teacher__content">
                    <div>
                      <h5>Loki</h5>
                      <h6>CEO</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="teacher__single">
                  <div class="teacher__img"><img src={require('../images/teacher2.jpg')} class="img-fluid" alt=""/></div>
                  <div class="teacher__content">
                    <div>
                      <h5>Thor</h5>
                      <h6>CTO</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="more__teacher text-center"><a class="teacher__quali"
                    href={configData.SITE_URL+"/moreproject"}>With 20+ Qualified Teacher?​</a><a class="teacher__btn"
                    href={configData.SITE_URL+"/moreproject"}>View All Here<svg aria-hidden="true" focusable="false"
                      data-prefix="fas" data-icon="caret-right" class="svg-inline--fa fa-caret-right fa-w-6 " role="img"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                      <path fill="currentColor"
                        d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z">
                      </path>
                    </svg></a><a class="teacher__car" href={configData.SITE_URL+"/moreproject"}>Careers</a></div>
              </div>
            </div>
          </div>
        </div>
        <div class="joinsession__wrapper margin__bottom">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 offset-sm-0 col-lg-6 text-center offset-lg-5 mx-auto">
                <h5 class="session__sub">Join Our New Session</h5>
                <h2 class="session__title">Call To Enroll Your Child +256 6425 789</h2><a class="session__join"
                  href={configData.SITE_URL+"/moreproject"}>Call Us Now<svg aria-hidden="true" focusable="false"
                    data-prefix="fas" data-icon="caret-right" class="svg-inline--fa fa-caret-right fa-w-6 " role="img"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                    <path fill="currentColor"
                      d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z">
                    </path>
                  </svg></a>
              </div>
            </div>
          </div>
        </div>
        <div class="blog__wrapper">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 offset-lg-4 mx-auto ">
                <div class="section__title__container text-center">
                  <h5 class="section__subtitle">Together We Can Create</h5>
                  <h2 class="section__title">Interesting Articles Updated Daily</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-xl-3 col-md-6">
                <div class="blog__single">
                  <div class="blog__img"><img src={require('../images/blog.jpg')}  class="img-fluid"
                      alt="1Helping Your Child With Socialization"/></div>
                  <div class="blog__inner__content">
                    <h5 class="blog__title"><a href={configData.SITE_URL+"/details"}>1Helping Your Child With
                        Socialization</a></h5>
                    <p class="blog__para">1Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod tempor invidunt ut</p>
                    <ul class="blog__comment">
                      <li> 12 Comments</li>
                      <li> | </li>
                      <li>Dec 17, 2020 </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-xl-3 col-md-6">
                <div class="blog__single">
                  <div class="blog__img"><img src={require('../images/blog1.jpg')}  class="img-fluid"
                      alt="2Helping Your Child With Socialization"/></div>
                  <div class="blog__inner__content">
                    <h5 class="blog__title"><a href={configData.SITE_URL+"/details"}>2Helping Your Child With
                        Socialization</a></h5>
                    <p class="blog__para">2Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod tempor invidunt ut</p>
                    <ul class="blog__comment">
                      <li> 12 Comments</li>
                      <li> | </li>
                      <li>Dec 17, 2020 </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-xl-3 col-md-6">
                <div class="blog__single">
                  <div class="blog__img"><img src={require('../images/blog2.jpg')}  class="img-fluid"
                      alt="3Helping Your Child With Socialization"/></div>
                  <div class="blog__inner__content">
                    <h5 class="blog__title"><a href={configData.SITE_URL+"/details"}>3Helping Your Child With
                        Socialization</a></h5>
                    <p class="blog__para">3Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod tempor invidunt ut</p>
                    <ul class="blog__comment">
                      <li> 12 Comments</li>
                      <li> | </li>
                      <li>Dec 17, 2020 </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-xl-3 col-md-6">
                <div class="blog__single">
                  <div class="blog__img"><img src={require('../images/blog3.jpg')} class="img-fluid"
                      alt="4Helping Your Child With Socialization"/></div>
                  <div class="blog__inner__content">
                    <h5 class="blog__title"><a href={configData.SITE_URL+"/details"}>4Helping Your Child With
                        Socialization</a></h5>
                    <p class="blog__para">4Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod tempor invidunt ut</p>
                    <ul class="blog__comment">
                      <li> 12 Comments</li>
                      <li> | </li>
                      <li>Dec 17, 2020 </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="more__teacher text-center"><a class="teacher__quali"
                    href={configData.SITE_URL+"/moreproject"}>With 20+ Qualified Teacher?​</a><a class="teacher__btn"
                    href={configData.SITE_URL+"/moreproject"}>View All Here <svg aria-hidden="true" focusable="false"
                      data-prefix="fas" data-icon="caret-right" class="svg-inline--fa fa-caret-right fa-w-6 " role="img"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                      <path fill="currentColor"
                        d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z">
                      </path>
                    </svg></a><a class="teacher__car" href={configData.SITE_URL+"/moreproject"}>Careers</a></div>
              </div>
            </div>
          </div>
        </div>
        <div class="subscriber__wrapper padding__top__botton margin__top">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <div class="subscriber__title__container">
                  <h2 class="subscriber__title">Subscribe Newsletter</h2>
                  <p class="subscriber__contnet">Enter your email address to register to our newsletter delivered on a
                    regular basis!</p>
                </div>
                <form class="form-inline">
                  <div class="form-group"><input type="email" class="form-control" id="inputPassword2"
                      placeholder="Enter mail"/><button type="submit" class="btn">subscribe</button></div>
                </form>
              </div>
            </div>
          </div>
          <div class="subscriber__con"><img src={require('../images/sidecolor.svg')} alt=""/></div>
        </div>
      </div>
    );
}

Home.propTypes = {
    isMobile: PropTypes.bool.isRequired,
};

export default Home;

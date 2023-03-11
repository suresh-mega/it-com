import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';


class LatestNews extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.latestNews

    return <section className="blog-area pt-115 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="section-title section-title-2 text-center">
                  <span>{ data.title }</span>
                  <h3 className="title">{ data.subtitle } </h3>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
            { data.items.map( ( item, i ) =>
               <div key={ i } className="col-lg-9">
                    <div className="blog-item mt-30 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay={ item.delay } >
                      <div className="row align-items-center justify-content-center">
                      <div className="col-12">
                          <div className="blog-thumb">
                            <img src={ item.image } alt={ item.title } title={ item.title } />
                          </div>
                        </div>
                        <div className="col-12 my-3">
                          <div className="blog-content borex-go-top">
                            <h4 className="title ">{ item.title }</h4>
                            <p>{ parse (item.content) } </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
            ) }

            </div>
          </div>
        </section>
        }
}

export default LatestNews
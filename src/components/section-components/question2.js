import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';


class Question2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.question2

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
            
               <div className="col-lg-9">
                    <div className="blog-item mt-30 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay={ data.delay } >
                      <div className="row align-items-center justify-content-center">
                      <div className="col-12">
                          <div className="blog-thumb">
                            <img src={ data.image } alt={ data.title } title={ data.title } />
                          </div>
                        </div>
                    { data.items.map( ( item, i ) =>
                        <div key={ i }  className="col-12">
                          <div className="blog-content borex-go-top">
                            <h4 className="title ">{ item.question }</h4>
                            <p><b>Solution:</b> { parse (item.answer) } </p>
                          </div>
                        </div>
                      ) }
                      </div>
                    </div>
                </div>

            </div>
          </div>
        </section>
        }
}

export default Question2
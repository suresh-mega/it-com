import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

class ServicesV4 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.servicepage

    return <div>
          <section className="services-2-area services-about">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="section-title section-title-3 text-center">
                    <span>{ data.title }</span>
                    <h3 className="title">{ data.subtitle }</h3>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
              
                  { data.items.map( ( item, i )=>
                    <div key={ i } className="col-lg-4 col-md-6 col-sm-8">
                      <div className="services-item mt-30 wow fadeInUp animated borex-go-top" data-wow-duration="1000ms" data-wow-delay={ item.delay }>
                        <img src={ item.icon } alt={item.title} title={item.title}/>
                        <h5 className="title">{ item.title }</h5>
                        <p>{ item.content }</p>
                        <Link className="main-btn" to={ item.url }>Read More </Link>
                      </div>
                    </div>
                 ) }

              </div>
            </div>
          </section>
        </div>



        }
}

export default ServicesV4
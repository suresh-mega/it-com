import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Testimonial extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.testimonial

    return <div>
      <section className="testimonials-area bg_cover" style={{backgroundImage: 'url('+publicUrl+'assets/images/testimonials-bg.jpg)'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <span>{ data.title }</span>
                <h3 className="title">{ data.subtitle } </h3>
              </div>
            </div>
          </div>
        </div>
        </section>
        <div className="testimonials-slider">
          <div className="container">
            <div className="row testimonials-active">
            { data.items.map( ( item,i )=>
                  <div key={ i } className="col-lg-6">
                  <div className="testimonials-item">
                    <p>{ item.content }</p>
                    <i className="flaticon-quote" />
                    <div className="info">
                      <img src={ item.image } alt={ imagealt } />
                      <span>{ item.name }</span>
                    </div>
                  </div>
                </div>
             ) }
              
            </div>
          </div>
        </div>
      </div>

        }
}

export default Testimonial
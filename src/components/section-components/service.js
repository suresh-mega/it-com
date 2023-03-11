import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

class Services extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let data = sectiondata.service

    return <section className="services-area">
        <div className="container">
          <div className="row justify-content-center borex-go-top">
            <div className="col-lg-4">
              <div className="services-content mt-95">
                <span>{ data.title }</span>
                <h3 className="title">{ data.subtitle }</h3>
                <p> </p>
                <Link className="main-btn" to="/hardware-maintenance-and-support-services">View more <i className="flaticon-right-arrow" /></Link>
              </div>
            </div>
            { data.items.map( ( item, i )=>
                 <div key={ i } className="col-lg-4 col-md-6 col-sm-9">
                  <div className="services-item mt-80">
                    <div className="services-thumb">
                      <img src={ item.image } alt={ item.alt } title={ item.titleimage } />
                    </div>
                    <div className="services-item-content borex-go-top">
                      <i className={ item.icon } />
                      <h5 className="title"  dangerouslySetInnerHTML={{__html: item.title}}></h5>
                      <Link to={ item.url }>Read More</Link>
                    </div>
                  </div>
                </div>
             ) }
           
          </div>
        </div>
      </section>

        }
}

export default Services
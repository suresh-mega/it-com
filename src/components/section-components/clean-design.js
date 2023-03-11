import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

class CleanDesign extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'Hardware Support'
        let imagetitle = 'Hardware Support'
        let data = sectiondata.cleandesign

    return <section className="clean-designs-area pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6 col-sm-7">
              <div className="clean-designs-thumb wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".3s">
                <div className="item">
                  <img src={ data.image } alt={ imagealt } title={ imagetitle } />
                  <div className="clean-designs-thumb-content text-center d-flex">
                    <div className="icon">
                      <ul>
                        <li><i className="flaticon-star" /></li>
                        <li><i className="flaticon-star" /></li>
                        <li><i className="flaticon-star" /></li>
                      </ul>
                      <i className="flaticon-like" />
                    </div>
                    <div className="text text-left ml-15">
                      <h4 className="title" dangerouslySetInnerHTML={{__html: data.imagetext}}></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="clean-designs-content ml-50">
                <div className="content">
                  <span>{ data.title }</span>
                  <h3 className="title" dangerouslySetInnerHTML={{__html: data.subtitle}}></h3>
                  <p>{ parse(data.content) }</p>
                </div>
                <div className="clean-counter d-flex">
                  { data.items.map( ( item, i )=>
                      <div key={ i } className="item ">
                        <h2 className="title"><span className="counter">{ item.number }</span>%</h2>
                        <span>{ item.title }</span>
                      </div>
                   ) }
                  
                </div>
                <div className="clean-btn mt-45 borex-go-top">
                  <Link className="main-btn" to="/hardware-maintenance-and-support-services">View more <i className="flaticon-right-arrow" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



        }
}

export default CleanDesign
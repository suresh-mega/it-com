import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

class WhyChooseUs extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.whychooseus
        let customclass = this.props.customclass ? this.props.customclass : ''

    return <section className={"why-choose-area "+customclass}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-9">
              <div className="why-choose-content">
                <div className="content">
                  <span>{ data.title }</span>
                  <h3 className="title">{ data.subtitle }</h3>
                  { parse(data.content) }
                </div>
                <div className="choose-list d-block">
                 { data.items.map( ( item, i )=>
                    <div key={ i } className="item">
                        <p className='mt-2'>{ item.content }</p>
                      </div>
                  ) }
                  
                </div>
                <ul className="borex-go-top">
                  <li><Link className="main-btn" to="/aol-mail-login-support">View more <i className="flaticon-right-arrow" /></Link></li>
                  <li><Link to="/aol-mail-login-support"><i className="flaticon-layers" /> more features </Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="why-choose-thumb">
                <img src="http://192.168.56.1:3000/assets/images/why-choose-thumb.jpg" alt="AOL Mail 295" title="AOL Mail 295" />
              </div>
            </div>
          </div>
        </div>
      </section>


        }
}

export default WhyChooseUs

import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
class Banner extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.banner

    return <section className="banner-area d-flex align-items-center bg_cover" style={{backgroundImage: 'url(assets/images/banner-bg.jpg)'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="banner-content">
                <h1 className="title wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".3s">{ data.title }</h1>
                <p className="wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".6s">{ data.subtitle }</p>
                <Link className="main-btn wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".9s" to={ data.btnurl }>{ data.btn_text } <i className="flaticon-right-arrow" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

        }
}

export default Banner
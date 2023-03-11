import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sectiondata from '../../data/topbar-data.json';

class Navbar extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let data = sectiondata.navbarone
        return (
            <div>
                <header className="header-area">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="header-top d-flex justify-content-between">
                          <div className="header-top-info d-none d-md-block">
                            <ul>
                              <li><a href="#"><i className="fa fa-map-marker" /> { data.leftpartone }</a></li>
                              <li><a href="mailto:us.cloudservices@gmail.com"><i className="fa fa-envelope" />{ data.leftparttwo } </a></li>
                              <li><a href="tel:+1(231) 981-0372"><i className="fa fa-phone" />{ data.leftpartthree } </a></li>
                            </ul>
                          </div>
                          <div className="header-top-social">
                            <select>
                              <option value={1}>English</option>
                              <option value={2}>Bangla</option>
                              <option value={3}>Hindi</option>
                              <option value={4}>Spanish</option>
                            </select>
                            <ul>
                               { data.socialicon.map( ( item, i ) =>
                                  <li key={ i }><a href={ item.url }><i className={ item.icon } /></a></li>
                                ) }

                            </ul>
                          </div>
                        </div>
                        <div className="navigation">
                          <nav className="navbar navbar-expand-lg">
                            <Link className="navbar-brand" to="/">
                              <img src={"http://192.168.56.1:3000/assets/images/logo.png"} alt="It Support" title="It Support" />
                            </Link> {/* logo */}
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarFive" aria-controls="navbarFive" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="toggler-icon" />
                              <span className="toggler-icon" />
                              <span className="toggler-icon" />
                            </button> {/* navbar toggler */}
                            <div className="collapse navbar-collapse sub-menu-bar" id="navbarFive">
                              <ul className="navbar-nav m-auto borex-go-top">
                                <li className="nav-item">
                                  <Link className="page-scroll" to="/">Home</Link>
                                </li>
                                {/* <li className="nav-item">
                                  <Link className="page-scroll" to="/about">About </Link>
                                </li> */}
                                <li className="nav-item">
                                  <a className="page-scroll" href="#">Services <span>+</span></a>
                                  <ul className="sub-menu">
                                    <li><Link to="/quickbooks-intuit-support">QuickBooks Support</Link></li>
                                    <li><Link to="/aol-mail-login-support">Aol Support</Link></li>
                                  </ul>
                                </li>
                                <li className="nav-item">
                                  <Link className="page-scroll" to="/contact-us">contact</Link>
                                </li>
                              </ul>
                            </div>
                            <div className="navbar-btn d-none d-sm-inline-block borex-go-top">
                              <Link className="main-btn ml-20" to="/contact-us">Get A Quote <i className="flaticon-right-arrow" /></Link>
                            </div>
                          </nav> {/* navbar */}
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
            </div>
        )
    }
}


export default Navbar

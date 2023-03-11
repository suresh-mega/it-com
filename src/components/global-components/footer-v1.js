import React, { Component } from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import footerdata from '../../data/footerdata.json';

class Footer_v1 extends Component {

    componentDidMount() {
        let publicUrl = process.env.PUBLIC_URL+'/'

        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = "Footer logo"

        return (
            <div>
                <footer className="footer-area">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="footer-content mt-30">
                              <Link className="borex-go-top" to="https://www.itsupport.net.in"><img src={ footerdata.footerlogohomeone } alt="It Support" title='It Support' /></Link>
                              <p>{ footerdata.footertext }</p>
                              <ul>
                                 { footerdata.socialicon.map( ( item, i )=>
                                    <li key={ i }><a target='_blank ' href={ item.url }><i className={ item.icon } /></a></li>
                                  ) }

                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="footer-list mt-30">
                              <h3 className="title">{ footerdata.services.title }</h3>
                              <ul>
                                 { footerdata.services.links.map( ( item, i )=>
                                    <li className="borex-go-top" key={ i }><Link to={ item.url }>{ item.title }</Link></li>
                                  ) }

                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-list item-2 mt-30 pl-45">
                              <h3 className="title">{ footerdata.quicklink.title }</h3>
                              <ul>
                                { footerdata.quicklink.links.map( ( item, i )=>
                                    <li className="borex-go-top" key={ i }><Link to={ item.url }>{ item.title }</Link></li>
                                  ) }
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <div className="footer-list mt-30">
                              <h3 className="title">{ footerdata.instagram.title }</h3>
                              <ul>
                               { footerdata.instagram.firstlist.map( ( item, i )=>
                                <li key={ i }>
                                  <li className="borex-go-top" key={ i }><Link to={ item.url }>{ item.title }</Link></li>
                                </li>
                                ) }
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="footer-copyright">
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="footer-copyright-item borex-go-top">
                                <div className='footer-review' itemscope itemtype="http://schema.org/Product">
                                  <span itemprop="brand">{this.props.review.reviewBody}</span>
                                  <span itemprop="name">{this.props.review.author}</span>
                                  <span itemprop="description">{this.props.review.reviewDiscription}</span>Product #: <span itemprop="mpn">{this.props.review.product}</span> <span itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating"><span itemprop="ratingValue">{this.props.review.ratingValue}</span> stars, based on <span itemprop="reviewCount">{this.props.review.product}</span>Reviews</span>
                                </div>
                                <div className='d-flex justify-content-between'>
                                  <p>{parse (footerdata.copyrighttext) }</p>
                                  <ul>
                                  { footerdata.copyrgihtmenu.links.map( ( item, i )=>
                                      <li key={ i }><Link to={ item.url }>{ item.title }</Link></li>
                                    ) }
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                </footer>
                <div className="go-top-area">
                  <div className="go-top-wrap">
                    <div className="go-top-btn-wrap">
                      <div className="go-top go-top-btn">
                        <i className="fa fa-angle-double-up" />
                        <i className="fa fa-angle-double-up" />
                      </div>
                    </div>
                  </div>
                </div>

            </div>
        )
    }
}


export default Footer_v1
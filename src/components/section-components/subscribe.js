import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Subscribe extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.banner

    return <div className="subscribe-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="subscribe-box">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="subscribe-info pl-65">
                        <h3 className="title">Need Consultation?</h3>
                        <ul>
                          <li><a href="tel:+1(231) 981-0372">Phone no.: +1(231) 981-0372</a></li>
                          <li><a href="mailto:us.cloudservices@gmail.com">Email: us.cloudservices@gmail.com</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="subscribe-info pl-50 pr-70">
                        <h3 className="title">Need Consultation?</h3>
                        <form action="/" method="GET">
                          <div className="input-box">
                            <input type="email" name="email" placeholder="Email" />
                            <button type="submit">Subscribe</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        }
}

export default Subscribe
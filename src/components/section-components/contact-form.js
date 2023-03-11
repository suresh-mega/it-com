import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class ContactForm extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.banner

    return <section className="my-form bg_cover pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="input-box mt-20">
                        <label for="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" aria-describedby="emailHelp"/>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="input-box mt-20">
                        <label for="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" aria-describedby="emailHelp"/>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="input-box mt-20">
                        <label for="yourEmail" className="form-label">Your Email</label>
                        <input type="text" className="form-control" id="yourEmail" aria-describedby="emailHelp"/>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="input-box mt-20">
                        <label for="subjectName" className="form-label">Subject</label>
                        <input type="text" className="form-control" id="subjectName" aria-describedby="emailHelp"/>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-box mt-20">
                        <label for="message" className="form-label">Message</label>
                        <textarea className="form-control" name="#" id="message" cols={30} rows={10} placeholder="Message" defaultValue={""} />
                        <button className="main-btn mt-3" type="submit">Get in Touch</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

   

        }
}

export default ContactForm
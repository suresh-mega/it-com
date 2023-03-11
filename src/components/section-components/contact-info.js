import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';
import ContactForm from './contact-form';
class ContactInfo extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.banner

    return <div>
        <div className="contact-area pt-90 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4">
                <div className="contact-item text-center mt-30">
                  <i className="flaticon-location" />
                  <h4 className="title">Our Address</h4>
                  <ul>
                    <li>595 Bluffs Dr, Marina CA 93933, USA</li>
                  </ul>
                  <a className="main-btn" href="#">Directions</a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="contact-item text-center mt-30">
                  <i className="flaticon-dial-pad" />
                  <h4 className="title">Our Phone</h4>
                  <ul>
                    <li>Our customer care is open from Mon-Fri, 09:00 am to 6:00 pm</li>
                    <li>Phone Number : +1(231) 981-0372</li>
                  </ul>
                  <a className="main-btn" href="tel:+1(231) 981-0372">Call Us</a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="contact-item text-center mt-30">
                  <i className="flaticon-email" />
                  <h4 className="title">Our Email</h4>
                  <ul>
                    <li>Our support team will be reply in 48-h during your Question. </li>
                    <li>Inquiries : us.cloudservices@gmail.com</li>
                  </ul>
                  <a className="main-btn" href="mailto:us.cloudservices@gmail.com">Send a Message</a>
                </div>
              </div>
              <div className='mt-50 col-md-8'>
                <h2 className='title'>Let’s get in touch</h2>
                <p>I have world-class, flexible support via live chat, email & phone. I guar antee that you’ll be able to have any issue resolved within 24/7</p>

                <ContactForm />
                
              </div>
            </div>
          </div>
        </div>
        {/*====== CONTACT PART ENDS ======*/}
        {/*====== CONTACT PART ENDS ======*/}
        <div className="google-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14612.975409527537!2d90.497437!3d23.7029844!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1586797125892!5m2!1sen!2sbd" width={600} height={450} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
        </div>
      </div>


        }
}

export default ContactInfo
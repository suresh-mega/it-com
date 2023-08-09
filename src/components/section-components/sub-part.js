import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

class SubPart extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let data = sectiondata.subpart

    return <section className="sub-area">
          <div className="container">
            <div className="row justify-content-center">
              { data.items.map( ( item, i )=>
                <div key={ i } className="col-lg-3 col-md-6 col-sm-9 text-center">
                  <div className="sub-item white-bg mt-30 borex-go-top" style={{backgroundImage: `url(${item.img})`}}>
                  </div>
                  <Link to={ item.url }><h5 className="title  mt-3"  dangerouslySetInnerHTML={{__html: item.title}}></h5></Link>
                </div>
               ) }

            </div>
          </div>
        </section>

        }
}

export default SubPart

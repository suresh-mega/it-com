import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Page_header extends Component {

    render() {

        let HeaderTitle = this.props.headertitle;
        let HeaderImage = this.props.headerimage;
        let publicUrl = process.env.PUBLIC_URL+'/'

        const { location } = this.props;

        return (
            <div className="page-title-area d-flex align-items-center bg_cover" style={{backgroundImage: `url(${HeaderImage})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-title-content text-center">
                                <h1 className="title">{ HeaderTitle }</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"><Link to="/" itemprop="item">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">{ HeaderTitle }</li>     
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Page_header);

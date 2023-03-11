import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ContactInfo from './section-components/contact-info';
import Subscribe from './section-components/subscribe';
import FooterV2 from './global-components/footer-v1';
import { Helmet } from 'react-helmet';
import reviewdata from '../data/reviewdata.json';

const Contact = () => {
    return <div>
        <Helmet>
            <title lang="en-in">Contact Us</title>
            <meta name="keywords" content="aol mail usa, aol mail help, On-Demand IT, Hardware Support, Software Services, Network Management, IT Communications, Cloud Services, Help Desk, AI, ML, Industrial 5G, Big Data Analytics, Robotics, Cloud computing, Grid computing, Edge. IoT, AR & VR, Blockchain, manufacturing, 3D Printing, Industrial IoT, Cybersecurity and BI"/>
            <meta name="description" content=""/>
            <meta property="og:title" content="Contact Us"/>
            <meta property="og:description" content=""/>
            <meta property="og:url" content="https://itsupport.net.in/contact-us"/>
            <meta property="og:site_name" content="A Leading Customer Support Services Since One Decade"/>
            <meta property="og:image" content="https://i7p5b3w3.stackpathcdn.com/assets/images/happynew-year-itsupport-banner.jpg"/>
            <meta name="twitter:title" content="Contact Us"/>
            <meta name="twitter:description" content=""/>
            <meta name="twitter:image" content="https://i7p5b3w3.stackpathcdn.com/assets/images/home/aol-mail-295-1.jpg"/>
            <link rel="canonical" href="https://www.itsupport.net.in/contact-us"/>
            <link rel="alternate" href="https://www.itsupport.net.in/contact-us" hreflang="en-US"/>
            <link rel="alternate" href="https://www.itsupport.net.in/contact-us" hreflang="en-AE"/>
            <link rel="alternate" href="https://www.itsupport.net.in/contact-us" hreflang="de-DE"/>
            <link rel="alternate" href="https://www.itsupport.net.in/contact-us" hreflang="es-ES"/>
            <link rel="alternate" href="https://www.itsupport.net.in/contact-us" hreflang="fr-FR"/>
            <link rel="alternate" href="https://www.itsupport.net.in/contact-us" hreflang="pt-BR"/>
            <link rel="alternate" href="https://www.itsupport.net.in/contact-us" hreflang="en-GB"/>
            <link rel="alternate" href="https://www.itsupport.net.in/contact-us" hreflang="en-CA"/>
            <link rel="alternate" href="https://www.itsupport.net.in/contact-us" hreflang="en-MY"/>
            <link rel="alternate" href="https://www.itsupport.net.in/contact-us" hreflang="en-SG"/>
            <link rel="alternate" href="https://www.itsupport.net.in/contact-us" hreflang="en-NG"/>
            <link rel="alternate" href="https://www.itsupport.net.in/contact-us" hreflang="en-ID"/>
            <link rel="alternate" href="https://www.itsupport.net.in/contact-us" hreflang="en-IE"/>
            <link rel="alternate" href="https://www.itsupport.net.in/contact-us" hreflang="en-AU"/>
            <link rel="alternate" href="https://www.itsupport.net.in/contact-us" hreflang="en-IN"/>
            <link rel="alternate" href="https://www.itsupport.net.in/contact-us" hreflang="en-NZ"/>
            <link rel="alternate" href="https://www.itsupport.net.in/contact-us" hreflang="en-PH"/>
            <link rel="alternate" href="https://www.itsupport.net.in/contact-us" hreflang="en-ZA"/>
            <link rel="alternate" href="https://www.itsupport.net.in/contact-us" hreflang="es-MX"/>
            <link rel="alternate" href="https://www.itsupport.net.in/contact-us" hreflang="es-CO"/>
            <link rel="alternate" href="https://www.itsupport.net.in/contact-us" hreflang="es-PE"/>
            <link rel="alternate" href="https://www.itsupport.net.in/contact-us" hreflang="es-AR"/>
            <link rel="alternate" href="https://www.itsupport.net.in/contact-us" hreflang="es-CL"/>
            <link rel="alternate" href="https://www.itsupport.net.in/contact-us" hreflang="es-VE"/>
            <link rel="alternate" href="https://www.itsupport.net.in/contact-us" hreflang="pt-PT"/>
            <link rel="alternate" href="https://www.itsupport.net.in/contact-us" hreflang="fr-CA"/>
            <script type="application/ld+json">{`
                {
                    "@context": "https://schema.org",
                    "@type": "Review",
                    "name": "IT Support",
                    "url": "https://itsupport.net.in/contact-us",
                    "image": "https://i7p5b3w3.stackpathcdn.com/assets/images/logo.png",
                    "author": "Rajat",
                    "reviewBody": "Best IT Support Services",
                    "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                    },
                    "itemReviewed": {
                    "@type": "LocalBusiness",
                    "name": "2977",
                    "priceRange": "$ 200 Email Support Services and Solutions",
                    "image": "https://i7p5b3w3.stackpathcdn.com/assets/images/logo.png",
                    "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "P.O.Box 1329 3100 De Forest Rd Marina",
                    "addressLocality": "California",
                    "addressRegion": "California",
                    "postalCode": "1329",
                    "telephone": "+1 (888) 279-5001",
                    "addressCountry": {
                    "@type": "Country",
                    "name": "USA"
                    }
                    }
                    }
                }
            `}</script>
        </Helmet>
        <Navbar />
        <PageHeader headertitle="Contact" headerimage="https://helpteck.com/assets/images/contact-banner-main.jpg" />
        <ContactInfo  />
        <Subscribe  />
        <FooterV2 review={reviewdata.contactReview}/>
    </div>
}

export default Contact


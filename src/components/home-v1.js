import React from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import SubPart from './section-components/sub-part';
import WhyChooseUs from './section-components/why-choose-us';
import AolSupport from './section-components/aol-support';
import Question from './section-components/question';
import Question2 from './section-components/question2';
import Testimonial from './section-components/testimonial';
import LatestNews from './section-components/latest-news';
import Subscribe from './section-components/subscribe';
import FooterV1 from './global-components/footer-v1';
import {Helmet} from 'react-helmet';
import reviewdata from '../data/reviewdata.json';

const Home_V1 = () => {
    return <div>
        <Helmet>
            <title lang="en-in">Computer Support Services — IT Support & Consulting</title>
            <meta name="keywords" content="It Support Services, Aol Mail Login Support, eMail login Support, QuickBooks, QuickBooks Support Services"/>
            <meta name="description" content="HelpTeck provides managed IT services, support and technology consulting for businesses of all sizes. We handle all updates, antivirus, security, and monitoring for you."/>
            <meta property="og:title" content="Computer Support Services — IT Support & Consulting"/>
            <meta property="og:description" content="HelpTeck provides managed IT services, support and technology consulting for businesses of all sizes. We handle all updates, antivirus, security, and monitoring for you."/>
            <meta property="og:url" content="https://www.itsupport.net.in/"/>
            <meta property="og:site_name" content="A Leading Customer Support Services Since One Decade"/>
            <meta property="og:image" content="https://helpteck.com/assets/images/clean-designs-thumb.jpg"/>
            <meta name="twitter:title" content="Computer Support Services — IT Support & Consulting"/>
            <meta name="twitter:description" content="HelpTeck provides managed IT services, support and technology consulting for businesses of all sizes. We handle all updates, antivirus, security, and monitoring for you."/>
            <meta name="twitter:image" content="https://helpteck.com/assets/images/why-choose-thumb.jpg"/>
            <link rel="canonical" href="https://www.itsupport.net.in/"/>
            <link rel="alternate" href="https://www.itsupport.net.in/" hreflang="en-US"/>
            <link rel="alternate" href="https://www.itsupport.net.in/" hreflang="en-AE"/>
            <link rel="alternate" href="https://www.itsupport.net.in/" hreflang="de-DE"/>
            <link rel="alternate" href="https://www.itsupport.net.in/" hreflang="es-ES"/>
            <link rel="alternate" href="https://www.itsupport.net.in/" hreflang="fr-FR"/>
            <link rel="alternate" href="https://www.itsupport.net.in/" hreflang="pt-BR"/>
            <link rel="alternate" href="https://www.itsupport.net.in/" hreflang="en-GB"/>
            <link rel="alternate" href="https://www.itsupport.net.in/" hreflang="en-CA"/>
            <link rel="alternate" href="https://www.itsupport.net.in/" hreflang="en-MY"/>
            <link rel="alternate" href="https://www.itsupport.net.in/" hreflang="en-SG"/>
            <link rel="alternate" href="https://www.itsupport.net.in/" hreflang="en-NG"/>
            <link rel="alternate" href="https://www.itsupport.net.in/" hreflang="en-ID"/>
            <link rel="alternate" href="https://www.itsupport.net.in/" hreflang="en-IE"/>
            <link rel="alternate" href="https://www.itsupport.net.in/" hreflang="en-AU"/>
            <link rel="alternate" href="https://www.itsupport.net.in/" hreflang="en-IN"/>
            <link rel="alternate" href="https://www.itsupport.net.in/" hreflang="en-NZ"/>
            <link rel="alternate" href="https://www.itsupport.net.in/" hreflang="en-PH"/>
            <link rel="alternate" href="https://www.itsupport.net.in/" hreflang="en-ZA"/>
            <link rel="alternate" href="https://www.itsupport.net.in/" hreflang="es-MX"/>
            <link rel="alternate" href="https://www.itsupport.net.in/" hreflang="es-CO"/>
            <link rel="alternate" href="https://www.itsupport.net.in/" hreflang="es-PE"/>
            <link rel="alternate" href="https://www.itsupport.net.in/" hreflang="es-AR"/>
            <link rel="alternate" href="https://www.itsupport.net.in/" hreflang="es-CL"/>
            <link rel="alternate" href="https://www.itsupport.net.in/" hreflang="es-VE"/>
            <link rel="alternate" href="https://www.itsupport.net.in/" hreflang="pt-PT"/>
            <link rel="alternate" href="https://www.itsupport.net.in/" hreflang="fr-CA"/>
            <script type="application/ld+json">{`
                {
                    "@context": "https://schema.org",
                    "@type": "ProfessionalService",
                    "name": "IT Support | Best IT Support Service",
                    "image": "",
                    "@id": "",
                    "url": "https://itsupport.net.in/",
                    "telephone": "+1 (888) 279-5001",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "P.O.Box 1329 3100 De Forest Rd Marina",
                      "addressLocality": "California",
                      "postalCode": "1329",
                      "addressCountry": "USA"
                    },
                    "geo": {
                      "@type": "GeoCoordinates",
                      "latitude": 36.683300,
                      "longitude": 121.794230
                    },
                    "openingHoursSpecification": {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday"
                      ],
                      "opens": "09:00",
                      "closes": "18:00"
                    }
                  }
            `}</script>
            <script type="application/ld+json">{`
                {
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": [
                      
                  
                   {
                      "@type": "Question",
                      "name": "How can I manually set up Aol.com on Mailbird?",
                      "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "<p><a href=https://itsupport.net.in/mail-login>This page</a> will walk you through setting up an email account to Mailbird. Step 6 refers to the manual process.</p>"
                          }
                      }
                      ,{
                      "@type": "Question",
                      "name": "How do you generate an app password in Aol.com?",
                      "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "<p>Even though most email clients work with Aol.com out of the box, some situations may require you to generate an app password. You can find the button to generate an app-specific password for Aol.com in the account settings under the security tab. Use this password to sign on when your regular account password does not work. If you need more guidance, read our article: <a href=https://itsupport.net.in/mail-login title=How to Generate an App Password in Aol.com>How to Generate an App Password in Aol.com</a>.</p>"
                          }
                      }
                  
                              ]
                  }
            `}</script>
            <script type="application/ld+json">{`
                {
                  "@context" : "https://schema.org/",
                  "@type": "EmployerAggregateRating",
                  "itemReviewed": {
                    "@type": "Organization",
                    "name" : "Best IT Support Services",
                    "sameAs" : "https://www.itsupport.net.in/"
                  },
                  "ratingValue": "4.9",
                  "bestRating": "4.9",
                  "worstRating": "1",
                  "ratingCount" : "989768756"
                }
            `}</script>
            <script type="application/ld+json">{`
                {
                  "@context": "https://schema.org",
                  "@type": "ProfessionalService",
                  "name": "IT Support | Best IT Support Service",
                  
                  "image": "",
                  "@id": "",
                  "url": "https://itsupport.net.in/",
                  "telephone": "+1 (888) 279-5001",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "P.O.Box 1329 3100 De Forest Rd Marina",
                    "addressLocality": "California",
                    "postalCode": "1329",
                    "addressCountry": "USA"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 36.683300,
                    "longitude": 121.794230
                  },
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday"
                    ],
                    "opens": "09:00",
                    "closes": "18:00"
                  }
                }
            `}</script>
        </Helmet>
        <Navbar />
        <Banner />
        <SubPart />
        <WhyChooseUs />
        <AolSupport />
        <LatestNews />
        <Question />
        <Question2 />
        <Testimonial />
        <Subscribe />
        <FooterV1 review={reviewdata.homeReview}/>
    </div>
}

export default Home_V1


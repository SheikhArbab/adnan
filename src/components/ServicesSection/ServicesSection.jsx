import React from 'react';
import "./ServicesSection.css"
import { Link } from 'react-router-dom';

const ServicesSection = () => {

    const cards = [
        {
            image: "/services/1.png",
            title: "international students",
            description: "sed perpiciatis undem nise este natus sit volutate",
            link: "/"
        },
        {
            image: "/services/2.png",
            title: "foreign workers",
            description: "sed perspiciatis undm nise este natus sit volutate",
            link: "/"
        },
        {
            image: "/services/3.png",
            title: "permanent residenc",
            description: "sed perpiciatis undem nise este natus sit volutate",
            link: "/"
        },
    ];

    return (
        <section id="ServicesSection">

            <div className="myContainer mx-auto py-5 px-0">

                <h6>our services</h6>

                <h1 className="text-center text-capitalize" style={{ fontWeight: "bold" }}>services we offer</h1>

                <div className="services-card-wrapper d-flex align-items-center justify-content-center flex-wrap gap-4 mt-5 pt-5">

                    {cards.map(v => <div key={v.title} className="rounded-2">

                        <figure>
                            <img src={v.image} className="" />
                        </figure>

                        <h1 className="text-capitalize " style={{ fontWeight: "bold" }}>
                            {v.title}
                        </h1>

                        <p className="text-capitalize text-secondary">{v.description}</p>

                        <div className="d-flex align-items-center justify-content-end  gap-2">
                            <Link to={v.link} className="link d-block text-capitalize ms-auto">
                                read more
                            </Link>
                            <img src="/right-arrow.png" alt="" />
                        </div>

                    </div>)}

                </div>

            </div>

        </section>
    );
}

export default ServicesSection
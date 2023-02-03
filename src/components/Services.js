import React from 'react';

function Services () {
  return (
    <section className="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Our Services</h2>
              <hr className="my-4" />
              <p className="mb-5">We offer a wide range of services to meet your needs.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 text-center">
              <div className="service-box mt-5 mx-auto">
                <img src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="mb-3" width="100%" height="100%" alt="front-end development" />
                <h3 className="mb-3">Front-End Development</h3>
                <p className="text-muted mb-0">
                  Our team of experienced front-end developers specialize in HTML, CSS, and JavaScript to build engaging and responsive user interfaces.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <div className="service-box mt-5 mx-auto">
                <img src="https://images.pexels.com/photos/5380594/pexels-photo-5380594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="mb-3" width="100%" height="100%" alt="back-end development" />
                <h3 className="mb-3">Back-End Development</h3>
                <p className="text-muted mb-0">
                  Our back-end developers utilize PHP, Ruby on Rails, and other technologies to power your website and provide seamless data management and processing.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <div className="service-box mt-5 mx-auto">
                <img src="https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="mb-3" width="100%" height="100%" alt="full-stack development" />
                <h3 className="mb-3">Full-Stack Development</h3>
                <p className="text-muted mb-0">
                  Our full-stack developers offer a complete solution for your website, combining front-end and back-end expertise to deliver a seamless user experience.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <div className="service-box mt-5 mx-auto">
                <img src="https://images.pexels.com/photos/1181371/pexels-photo-1181371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="mb-3" width="100%" height="100%" alt="full-stack development" />
                <h3 className="mb-3">Landing Page Development</h3>
                <p className="text-muted mb-0">
                 Our team offers professional landing page development services to help you create a memorable and impactful first impression for your brand..
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                <img src="https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="mb-3" width="100%" height="100%" alt="graphic design" />
                <h3 className="mb-3">Graphic Design</h3>
                <p className="text-muted mb-0">
                Our graphic designers have the skills and experience to create eye-catching designs for your brand, from logos and marketing materials to websites and mobile applications.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                     <img src="https://images.pexels.com/photos/8102677/pexels-photo-8102677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="mb-3" width="100%" height="100%" alt="video editing service" />
                      <h3 className="mb-3">Video Editing Services</h3>
                      <p className="text-muted mb-0">
                          Our experienced video editors can turn your raw footage into a professional, polished product. From cutting and color correction to special effects, we've got you covered.
                      </p>
                  </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Services;

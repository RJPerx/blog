
import picture from "../kenn.jpg"


function About() {

  return (
    <>
    
    <div className="team">
                <div className="container">
                        <h2 className="text-center">Meet Our Team</h2>
                        <hr className="my-4" />
                        <p className="text-center">Our team is composed of experienced professionals who are dedicated to
                                providing valuable insights and knowledge to our audience.</p>
                        <div className="row">
                                <div className="col-lg-3 col-md-6 mb-5">
                                        <div className="card h-100">
                                                <img src="https://scontent.fozc1-1.fna.fbcdn.net/v/t39.30808-6/321339159_1154718922070716_7100417678845224026_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2l7X82Sx4QIAX-fULOJ&_nc_ht=scontent.fozc1-1.fna&oh=00_AfDzOrGF8F7j1HzwoLUF30sX-z0y9XQMphzQ8lLWT-Aa4g&oe=63E12850" alt="Team Member 1"
                                                        className="card-img-top"/>
                                                <div className="card-body">
                                                        <h4 className="card-title">Team Member 1</h4>
                                                        <p className="card-text">Team Member 1 is a highly skilled expert in
                                                                the field of marketing and communication.</p>
                                                </div>
                                        </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-5">
                                        <div className="card h-100">
                                                <img src="https://scontent.fozc1-1.fna.fbcdn.net/v/t39.30808-1/323115402_544669074382085_8619698757240561802_n.jpg?stp=dst-jpg_s320x320&_nc_cat=105&ccb=1-7&_nc_sid=f67be1&_nc_ohc=SRw8Ke4rregAX-F41LZ&_nc_ht=scontent.fozc1-1.fna&oh=00_AfBtUqO_a-t9VTDUmrTLBPAaoV_Q_jTOait4Ic6p2VU73Q&oe=63E0A66E" alt="Team Member 2"
                                                        className="card-img-top"/>
                                                <div className="card-body">
                                                        <h4 className="card-title">Team Member 2</h4>
                                                        <p className="card-text">Team Member 2 is a seasoned professional in
                                                                the field of technology and innovation.</p>
                                                </div>
                                        </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-5">
                                        <div className="card h-100">
                                                <img src="https://scontent.fozc1-1.fna.fbcdn.net/v/t39.30808-6/314664042_115138214738086_7871558648124551900_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BB9xvZrSP10AX9W9QaB&_nc_ht=scontent.fozc1-1.fna&oh=00_AfCZUkd8mKUwhDrY4VaOh1FA4c2V7xs_5Y0Ix2Bdl2nLIA&oe=63DFDFE6" alt="Team Member 3"
                                                        className="card-img-top"/>
                                                <div className="card-body">
                                                        <h4 className="card-title">Team Member 3</h4>
                                                        <p className="card-text">Team Member 3 is a leading expert in the
                                                                field of finance and investment.</p>
                                                </div>
                                        </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-5">
                                        <div className="card h-100">
                                                <img src="https://scontent.fozc1-1.fna.fbcdn.net/v/t1.6435-9/120500300_10207879552062064_429169696483273662_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sBJlp6XaqOcAX8Q3CmG&_nc_ht=scontent.fozc1-1.fna&oh=00_AfAeyamYyvP6CpHW49hyOn2G1wZrXauvlNCRqvsSgrD2CA&oe=64032814" alt="Team Member 4"
                                                        className="card-img-top"/>
                                                <div className="card-body">
                                                        <h4 className="card-title">Team Member 4</h4>
                                                        <p className="card-text">Team Member 4 is a highly experienced
                                                                professional in the field of design and creativity.</p>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
        <div className="testimonials text-center bg-light">
                <div className="container testimonials">
                        <h2 className="mb-5">What Our Clients Say</h2>
                        <div className="row">
                                <div className="col-lg-4">
                                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                                <img className="img-fluid rounded-circle mb-3 ken"
                                                        src={picture} alt="Client 1" style={{height:220,width:200}}/>
                                                <h5>Client 1</h5>
                                                <p className="font-weight-light mb-0">"This team is amazing. They've
                                                        exceeded my expectations and delivered a top-notch product. I
                                                        highly recommend them to anyone in need of their services."</p>
                                        </div>
                                </div>
                                <div className="col-lg-4">
                                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                                <img className="img-fluid rounded-circle mb-3"
                                                        src="https://scontent.fdvo2-1.fna.fbcdn.net/v/t1.6435-1/49898415_2482140491815722_3828058665357672448_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=-DVXwjATVOwAX_j88Bs&_nc_ht=scontent.fdvo2-1.fna&oh=00_AfDP--EJNuFmPgpTWUsgLSmr-Q20ZkkP68-lsbB0610gOg&oe=64032B08" alt="Client 2" style={{height:220,width:200}}/>
                                                <h5>Client 2</h5>
                                                <p className="font-weight-light mb-0">"The team at this company is
                                                        unparalleled in their level of expertise and professionalism.
                                                        They went above and beyond to deliver a truly exceptional
                                                        experience for me."</p>
                                        </div>
                                </div>
                                <div className="col-lg-4">
                                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                                <img className="img-fluid rounded-circle mb-3"
                                                        src="https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/288963008_4864088477046398_9196829102883613966_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=_FPmf3tLX60AX8G25sh&_nc_ht=scontent.fdvo2-1.fna&oh=00_AfAAXdl5bHuCyHrSiZ26YTRSaENuZcZkwC3IkroNFjjQWA&oe=63E036B0" alt="Client 3" style={{height:220,width:200}}/>
                                                <h5>Client 3</h5>
                                                <p className="font-weight-light mb-0">"I was thoroughly impressed with the
                                                        level of creativity and attention to detail demonstrated by this
                                                        team. They truly exceeded my expectations and I will be working
                                                        with them again in the future."</p>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>

    </>
  );
};

export default About;

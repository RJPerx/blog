



function Footer() {
    return (
      <>
          <footer className="bg-dark text-light mt-3 py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <h4 class="mb-4">Contact Information</h4>
                  <p>
                    Group 2 Mabuhay<br></br>
                    kodego Ph <br></br>
                    <i className="fa fa-phone mr-3"></i>0951-317-8530<br></br>
                    <i className="fa fa-envelope mr-3"></i>ringgobarako@gmail.com
                  </p>
                </div>
                <div className="col-md-4 text-center">
                <h4 className="mb-4">Download App</h4>
                  <a href="/#"><i className="fab fa-apple fa-2x mx-3"></i></a>
                  <a href="/#"><i className="fab fa-google-play fa-2x mx-3"></i></a>
                  <h4 className="mb-4">Social Media</h4>
                  <a href="/#"><i className="fab fa-facebook fa-2x mr-3"></i></a>
                  <a href="/#"><i className="fab fa-twitter fa-2x mx-3"></i></a>
                  <a href="/#"><i className="fab fa-instagram fa-2x mr-3"></i></a>
                </div>
                <div className="col-md-4 text-center">
                <h4 className="mb-4">Map</h4>
                <div className="mapouter">
                    <div className="gmap_canvas">
                      <iframe 
                        width="400" 
                        height="200" 
                        id="gmap_canvas" 
                        src="https://maps.google.com/maps?q=kodego%20ph&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                        frameborder="0" 
                        scrolling="no" 
                        marginheight="0" 
                        marginwidth="0">
                      </iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
      </>
    );
  }
  
  export default Footer;
  
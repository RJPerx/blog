


function Contact() {
    return (
        <>
           <div class="container my-5">
                        <h2 class="text-center">Contact Us</h2>
                        <hr className="my-4" />
                        <p class="text-center">
                        Reach out to us with any questions or concerns.
                        </p>
                        <div class="row">
                        <div class="col-md-8 mx-auto">
                            <form>
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input
                                type="text"
                                class="form-control"
                                id="name"
                                placeholder="Enter your name"
                                />
                            </div>
                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input
                                type="email"
                                class="form-control"
                                id="email"
                                placeholder="Enter email"
                                />
                            </div>
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea
                                class="form-control"
                                id="message"
                                rows="3"
                                placeholder="Enter your message"
                                ></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        </div>
                    </div>
        </>
    )
}
export default Contact;
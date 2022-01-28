import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Contact.css';

const Contact = () => {
    return (
        <div className="color-back">
            <Header></Header>
            <div className="page-container ">
                <h1>Fill Up The Form</h1>

                <form className="row g-3 needs-validation" novalidate>
                    <div className="disp-block">
                        <div className="col-md-4 disp">
                            <label for="validationCustom01" className="form-label">First name </label>
                            <input type="text" className="form-control" id="validationCustom01" />

                        </div>
                        <br />
                        <div className="col-md-4 disp">
                            <label for="validationCustom02" className="form-label">Last name </label>
                            <input type="text" className="form-control" id="validationCustom02" />

                        </div>
                        <br />
                        <div class="col-md-4 disp">
                            <label for="inputEmail4" class="form-label">Email </label>
                            <input type="email" class="form-control" id="inputEmail4" />
                        </div>
                        <br />
                        <div className="col-md-4 disp">
                            <label for="validationCustom02" className="form-label">Mobile </label>
                            <input type="text" className="form-control" id="validationCustom02" />

                        </div>
                        <br />
                        <div className="col-md-4 disp">
                            <label for="validationCustom02" className="form-label">Address </label>
                            <input type="text" className="form-control" id="validationCustom02" />

                        </div>
                        <br />
                        <div class="col-md-4 disp">
                            <label for="exampleFormControlTextarea1" class="form-label">Comments </label>
                            <textarea class="form-control text-ar" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <br />
                        <div className="col-12">
                            <div className="cheak-box">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                <label className="form-check-label agree-width" for="invalidCheck">
                                    Agree to terms and conditions
                                </label>
                            </div>
                        </div>

                        <div className="col-12">
                            <button className="btn btn-primary" type="submit">Submit form</button>
                        </div>
                    </div>
                </form>



            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;
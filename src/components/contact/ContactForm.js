import React from 'react';

export default function ContactForm() {
    return (
        <div className="contact-form">
            <form action="index.html">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Name*" required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email*" required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="tel" className="form-control" placeholder="Mobile" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Skype" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <textarea className="form-control" name="Message" placeholder="Message"></textarea>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

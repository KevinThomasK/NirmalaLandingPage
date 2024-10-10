import React from "react";

const contactModal = () => {
  return (
    <div className="col-lg-7 d-flex align-items-strech">
      <div className="border-color-primary-1 round w-100 px-4 px-sm-5 py-5">
        <h3 className="section-title-small mt-n10 mb-40 mb-sm-30">
          Get A Free Consultation
        </h3>
        {/* Contact Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="form contact-form"
          id="contact_form"
        >
          <div className="row">
            <div className="col-md-6">
              {/* Name */}
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input-lg round form-control"
                  placeholder="Enter your name"
                  pattern=".{3,100}"
                  required
                  aria-required="true"
                />
              </div>
              {/* End Name */}
            </div>
            <div className="col-md-6">
              {/* Email */}
              <div className="form-group">
                <label htmlFor="email">Phone</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input-lg round form-control"
                  placeholder="Enter your phone number"
                  pattern=".{5,100}"
                  required
                  aria-required="true"
                />
              </div>
              {/* End Email */}
            </div>
          </div>
          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="input-lg round form-control"
              placeholder="Enter your Email"
              pattern=".{5,100}"
              required
              aria-required="true"
            />
          </div>
          {/* End Email */}
          <div className="row">
            <div className="col-md-6 col-xl-7 d-flex align-items-center">
              {/* Inform Tip */}
              <div className="form-tip w-100 pt-3">
                <i className="icon-info size-16" />
                All the fields are required. By sending the form you agree to
                the <a href="#">Terms &amp; Conditions</a> and{" "}
                <a href="#">Privacy Policy</a>.
              </div>
              {/* End Inform Tip */}
            </div>
            <div className="col-md-6 col-xl-5 mt-sm-20">
              {/* Send Button */}
              <div className="pt-3 text-md-end">
                <button
                  type="submit"
                  className="submit_btn btn btn-mod btn-color btn-large btn-round btn-hover-anim"
                  id="submit_btn"
                  aria-controls="result"
                >
                  <span>Send Message</span>
                </button>
              </div>
              {/* End Send Button */}
            </div>
          </div>
          <div
            id="result"
            role="region"
            aria-live="polite"
            aria-atomic="true"
          />
        </form>
        {/* End Contact Form */}
      </div>
    </div>
  );
};

export default contactModal;

import React from "react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="container contact-section" id="contact">
        <div class="card">
          <div class="card-header">
            <ion-icon name="mail"></ion-icon>&emsp;Contact
          </div>
          <div class="card-body section-container">
            <div className="row">
              <h3 class="card-title section-title">
                <ion-icon name="mail-outline"></ion-icon>
                <br />
                Send me a mail
              </h3>
              <form>
                <div className="row justify-content-center">
                  <div class="mb-3 col-lg-4">
                    <label for="InputName" class="form-label">
                      <p>Name</p>
                    </label>
                    <input type="text" class="form-control" id="InputName" />
                  </div>
                  <div class="mb-3 col-lg-4">
                    <label for="InputEmail" class="form-label">
                      <p>Email address</p>
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="InputEmail"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3 col-lg-8">
                    <label for="InputMsg" class="form-label">
                      <p>Message</p>
                    </label>
                    <textarea
                      type="text"
                      class="form-control"
                      rows="3"
                      id="InputMsg"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary"
                  onSubmit={handleSubmit}
                >
                  Send&emsp;<ion-icon name="send"></ion-icon>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

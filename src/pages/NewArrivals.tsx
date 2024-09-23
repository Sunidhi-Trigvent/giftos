import React from "react";

function NewArrivals() {
  return (
    <>
      <section className="saving_section">
        {" "}
        {/* Use className instead of class */}
        <div className="box">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="img-box">
                  <img
                    src={require("../assets/images/images/saving-img.png")}
                    alt=""
                  />{" "}
                  {/* Self-close img tag */}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="detail-box">
                  <div className="heading_container">
                    <h2>
                      Best Savings on <br />
                      new arrivals
                    </h2>
                  </div>
                  <p>
                    Qui ex dolore at repellat, quia neque doloribus omnis
                    adipisci, ipsum eos odio fugit ut eveniet blanditiis
                    praesentium totam non nostrum dignissimos nihil eius facere
                    et eaque. Qui, animi obcaecati.
                  </p>
                  <div className="btn-box">
                    <a href="#" className="btn1">
                      Buy Now
                    </a>
                    <a href="#" className="btn2">
                      See More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewArrivals;

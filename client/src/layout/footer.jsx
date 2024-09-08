import React from "react";

const footer = () => {
  return (
    <>
      <footer class="text-light">
        <div class="container">
          <div class="row g-custom-x">
            <div class="col-lg-3">
              <div class="widget">
                <h5>About Rentaly</h5>
                <p>
                  Where quality meets affordability. We understand the
                  importance of a smooth and enjoyable journey without the
                  burden of excessive costs. That's why we have meticulously
                  crafted our offerings to provide you with top-notch vehicles
                  at minimum expense.
                </p>
              </div>
            </div>

            <div class="col-lg-3">
              <div class="widget">
                <h5>Contact Info</h5>
                <address class="s1">
                  <span>
                    <i class="id-color fa fa-location-dot"></i>08 W 36th St, New
                    York, NY 10001
                  </span>
                  <span>
                    <i class="id-color fa fa-phone fa-lg"></i>+1 333 9296
                  </span>
                  <span>
                    <i class="id-color fa-regular fa-envelope fa-lg"></i>
                    <a href="mailto:contact@example.com">contact@example.com</a>
                  </span>
                </address>
              </div>
            </div>

            <div class="col-lg-3">
              <h5>Quick Links</h5>
              <div class="row">
                <div class="col-lg-6">
                  <div class="widget">
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Our Cars</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3">
              <div class="widget">
                <h5>Social Network</h5>
                <div class="social-icons">
                  <a href="#">
                    <i class="fa-brands fa-facebook-f"></i>{" "}
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-pinterest"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-rss"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="subfooter">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="de-flex">
                  <div class="de-flex-col">
                    <a href="index.html">
                      Copyright 2024 - Rentaly by Designesia
                    </a>
                  </div>
                  <ul class="menu-simple">
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;

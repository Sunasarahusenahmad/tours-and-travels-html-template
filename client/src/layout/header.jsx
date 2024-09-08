import React from "react";

const header = () => {
  return (
    <>
      <header class="transparent header-light scroll-light has-topbar">
        <div id="topbar" class="topbar-dark text-light">
          <div class="container">
            <div class="topbar-left xs-hide">
              <div class="topbar-widget">
                <div class="topbar-widget">
                  <a href="#">
                    <i class="fas fa-phone"></i>+91 99257 15013
                  </a>
                </div>
                <div class="topbar-widget">
                  <a href="#">
                    <i class="fas fa-envelope"></i>
                    tajtoursandtravels@contact.com
                  </a>
                </div>
                <div class="topbar-widget">
                  <a href="#">
                    <i class="fas fa-clock"></i> 24/7 Available
                  </a>
                </div>
              </div>
            </div>

            <div class="topbar-right">
              <div class="social-icons">
                <a href="#">
                  <i class="fa-brands fa-facebook-f"></i>{" "}
                </a>
                <a href="#">
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-youtube"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-pinterest"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="de-flex sm-pt10">
                <div class="de-flex-col">
                  <div class="de-flex-col">
                    {/* <!-- logo begin --> */}
                    <div id="logo">
                      <a href="index.html">
                        <img
                          class="logo-1"
                          src="/assets/images/logo-light.png"
                          alt=""
                        />
                        <img
                          class="logo-2"
                          src="/assets/images/logo-dark.png"
                          alt=""
                        />
                      </a>
                    </div>
                    {/* <!-- logo close --> */}
                  </div>
                </div>
                <div class="de-flex-col header-col-mid">
                  <ul id="mainmenu">
                    <li>
                      <a class="menu-item" href="index.html">
                        Home
                      </a>
                    </li>
                    <li>
                      <a class="menu-item" href="index.html">
                        About
                      </a>
                    </li>
                    <li>
                      <a class="menu-item" href="index.html">
                        Services
                      </a>
                    </li>
                    <li>
                      <a class="menu-item" href="cars.html">
                        Cars
                      </a>
                      <ul>
                        <li>
                          <a class="menu-item" href="cars.html">
                            <i style={{ color: "#1ecb15", width: "10px" }}>-</i>{" "}
                            Cars List 1
                          </a>
                        </li>
                        <li>
                          <a class="menu-item" href="cars.html">
                            <i style={{ color: "#1ecb15", width: "10px" }}>-</i>{" "}
                            Cars List 2
                          </a>
                        </li>
                        <li>
                          <a class="menu-item" href="cars.html">
                            <i style={{ color: "#1ecb15", width: "10px" }}>-</i>{" "}
                            Cars List 3
                          </a>
                        </li>
                        <li>
                          <a class="menu-item" href="cars.html">
                            <i style={{ color: "#1ecb15", width: "10px" }}>-</i>{" "}
                            Cars List 4
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a class="menu-item" href="index.html">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="de-flex-col">
                  <div class="menu_side_area">
                    <span id="menu-btn"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default header;

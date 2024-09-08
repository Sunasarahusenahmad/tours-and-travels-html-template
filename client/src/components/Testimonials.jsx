import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "I have been using Rentaly for my Car Rental needs for over 5 years now. I have never had any problems with their service. Their customer support is always responsive and helpful. I would recommend Rentaly to anyone looking for a reliable Car Rental provider.",
      name: "Stepanie Hutchkiss",
      imageSrc: "/assets/images/testimonial/1.jpg",
    },
    {
      text: "We have been using Rentaly for our trips needs for several years now and have always been happy with their service. Their customer support is Excellent Service! and they are always available to help with any issues we have. Their prices are also very competitive.",
      name: "Jovan Reels",
      imageSrc: "/assets/images/testimonial/2.jpg",
    },
    {
      text: "Endorsed by industry experts, Rentaly is the Car Rental solution you can trust. With years of experience in the field, we provide fast, reliable and secure Car Rental services.",
      name: "Kanesha Keyton",
      imageSrc: "/assets/images/testimonial/3.jpg",
    },
  ];

  return (
    <>
      <section id="section-testimonials" class="no-top no-bottom">
        <div class="container">
          <div class="row">
            {testimonials.map((testimonial, index) => (
              <div className="col-md-4" key={index}>
                <div className="de-image-text">
                  <div className="d-text">
                    <div className="d-quote id-color">
                      <i className="fa fa-quote-right"></i>
                    </div>
                    <h4>Excellent Service! Car Rent Service!</h4>
                    <blockquote>
                      {testimonial.text}
                      <span className="by">{testimonial.name}</span>
                    </blockquote>
                  </div>
                  <img
                    src={testimonial.imageSrc}
                    className="img-fluid"
                    alt={testimonial.name}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;

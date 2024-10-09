import { testimonials4 } from "@/data/testimonials";
import Image from "next/image";
import React from "react";

export default function Testimonials2() {
  return (
    <div className="row mt-n50 mb-70 mb-sm-50">
      {/* Testimonials Item */}
      {testimonials4.map((testimonial) => (
        <div
          key={testimonial.id}
          className="col-md-4 mt-50 wow fadeInLeft"
          data-wow-delay={testimonial.delay}
        >
          <div className="text-center px-lg-4">
            <div className="testimonials-5-stars">
              <Image
                src={testimonial.image} // Use the dynamic image path
                height={400}
                width={400}
                alt={testimonial.caption} // Add alt text for better accessibility
              />
            </div>
            <div className="testimonials-5-text">{testimonial.text}</div>
            <div className="testimonials-5-caption">{testimonial.caption}</div>
          </div>
        </div>
      ))}
      {/* End Testimonials Item */}
    </div>
  );
}

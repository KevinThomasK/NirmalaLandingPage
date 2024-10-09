// import React from "react";
// import Image from "next/image";
// export default function Hero4({ dark }) {
//   return (
//     <>
//       <div className="container" />
//       <div className="row g-0">
//         <div className="col-lg-6">
//           <div
//             className={`split-column-right rounded-0 ${
//               dark ? "light-content" : ""
//             } position-relative d-flex align-items-center`}
//           >
//             <div className="w-100 text-center text-lg-start">
//               <h1 className="hs-title-9 mb-40 mb-sm-20 wow fadeInUp">
//                 Are you Looking for a Best University to Study in Ireland?
//               </h1>
//               <p
//                 className="hs-descr mb-50 mb-sm-40 wow fadeInUp"
//                 data-wow-delay="0.15s"
//               >
//                 Find the Top Universities in Ireland Will Give you an Admit.
//               </p>
//               <div
//                 className="wow fadeInUp wch-unset"
//                 data-wow-delay="0.3s"
//                 data-wow-offset={0}
//               >
//                 <div className="local-scroll mb-60 mb-sm-50">
//                   <a
//                     href="#contact"
//                     className="btn btn-mod btn-color btn-large btn-round btn-hover-anim"
//                   >
//                     <span>Book Free Counselling Now</span>
//                   </a>
//                 </div>
//                 {/* Features List */}
//                 <div className="mt-n10">
//                   {/* Features List Item */}
//                   <div className="d-flex justify-content-center justify-content-lg-start mt-10">
//                     <div
//                       className={`features-list-icon ${
//                         dark ? "features-list-color-1" : ""
//                       }`}
//                     >
//                       <i className="mi-check" />
//                     </div>
//                     <div className="features-list-text">
//                       20+ Partner Universities in Ireland
//                     </div>
//                   </div>
//                   {/* End Features List Item */}
//                   {/* Features List Item */}
//                   <div className="d-flex justify-content-center justify-content-lg-start mt-10">
//                     <div
//                       className={`features-list-icon ${
//                         dark ? "features-list-color-1" : ""
//                       }`}
//                     >
//                       <i className="mi-check" />
//                     </div>
//                     <div className="features-list-text">
//                       200+ Students Succesfully Enrolled
//                     </div>
//                   </div>
//                   {/* End Features List Item */}
//                   {/* Features List Item */}
//                   <div className="d-flex justify-content-center justify-content-lg-start mt-10">
//                     <div
//                       className={`features-list-icon ${
//                         dark ? "features-list-color-1" : ""
//                       }`}
//                     >
//                       <i className="mi-check" />
//                     </div>
//                     <div className="features-list-text">
//                       Scholarships upto 50%
//                     </div>
//                   </div>
//                   {/* End Features List Item */}
//                 </div>
//                 {/* End Features List */}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-6 d-flex align-items-stretch order-lg-first">
//           <div className="split-image-left rounded-0 pb-xs-70">
//             <img
//               src="/assets/images/nirmal-lp/hero1.jpg"
//               width={960}
//               height={1080}
//               alt="Image Description"
//               className="wow fadeScaleOutIn"
//               data-wow-duration="1.3s"
//             />
//             {/* Services Buttons */}
//             <div
//               className="local-scroll container position-absolute bottom-0 start-0 pb-30 pb-xs-0 wow fadeIn animated"
//               data-wow-duration="1.3s"
//               data-wow-offset={0}
//               style={{
//                 visibility: "visible",
//                 animationDuration: "1.3s",
//                 animationName: "fadeIn",
//               }}
//             >
//               <div className="mt-10">
//                 <a
//                   href="#services"
//                   className={`btn btn-mod ${
//                     dark ? "btn-dark" : "btn-w"
//                   }  btn-with-icon btn-circle`}
//                 >
//                   <span className="btn-icon color-3">
//                     <i className="mi-user" aria-hidden="true" />
//                   </span>
//                   <span data-btn-animate="y">
//                     <span className="btn-animate-y">
//                       <span className="btn-animate-y-1">
//                         Business Analytics
//                       </span>
//                       <span className="btn-animate-y-2" aria-hidden="true">
//                         Business Analytics
//                       </span>
//                     </span>
//                   </span>
//                 </a>
//               </div>
//               <div className="mt-10">
//                 <a
//                   href="#services"
//                   className={`btn btn-mod ${
//                     dark ? "btn-dark" : "btn-w"
//                   }  btn-with-icon btn-circle`}
//                 >
//                   <span className="btn-icon color-2">
//                     <i className="mi-search" aria-hidden="true" />
//                   </span>
//                   <span data-btn-animate="y">
//                     <span className="btn-animate-y">
//                       <span className="btn-animate-y-1">
//                         Post Graduates Courses
//                       </span>
//                       <span className="btn-animate-y-2" aria-hidden="true">
//                         Post Graduates Courses
//                       </span>
//                     </span>
//                   </span>
//                 </a>
//               </div>
//               <div className="mt-10">
//                 <a
//                   href="#services"
//                   className={`btn btn-mod ${
//                     dark ? "btn-dark" : "btn-w"
//                   }  btn-with-icon btn-circle`}
//                 >
//                   <span className="btn-icon color-4">
//                     <i className="mi-message" aria-hidden="true" />
//                   </span>
//                   <span data-btn-animate="y">
//                     <span className="btn-animate-y">
//                       <span className="btn-animate-y-1">Bsc Nursing</span>
//                       <span className="btn-animate-y-2" aria-hidden="true">
//                         Bsc Nursing
//                       </span>
//                     </span>
//                   </span>
//                 </a>
//               </div>
//             </div>

//             {/* End Services Buttons */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";

export default function Hero4({ dark }) {
  const images = [
    "/assets/images/nirmal-lp/hero1.jpg",
    "/assets/images/nirmal-lp/hero2.jpg",
    "/assets/images/nirmal-lp/hero3.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change image every 3 seconds (or any duration you prefer)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change to your desired interval in milliseconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <>
      <div className="container" />
      <div className="row g-0">
        <div className="col-lg-6">
          <div
            className={`split-column-right rounded-0 ${
              dark ? "light-content" : ""
            } position-relative d-flex align-items-center`}
          >
            <div className="w-100 text-center text-lg-start custommargin">
              <h1 className="hs-title-9 mb-40 mb-sm-20 wow fadeInUp ">
                Are you Looking for a Best University to Study in Ireland?
              </h1>
              <p
                className="hs-descr mb-50 mb-sm-40 wow fadeInUp"
                data-wow-delay="0.15s"
              >
                Find the Top Universities in Ireland Will Give you an Admit.
              </p>
              <div
                className="wow fadeInUp wch-unset"
                data-wow-delay="0.3s"
                data-wow-offset={0}
              >
                <div className="local-scroll mb-60 mb-sm-50">
                  <a
                    href="#contact"
                    className="btn btn-mod btn-color btn-large btn-round btn-hover-anim"
                  >
                    <span>Book Free Counselling Now</span>
                  </a>
                </div>
                {/* Features List */}
                <div className="mt-n10 customcenter">
                  {/* Features List Item */}
                  <div className="d-flex justify-content-center justify-content-lg-start mt-10">
                    <div
                      className={`features-list-icon ${
                        dark ? "features-list-color-1" : ""
                      }`}
                    >
                      <i className="mi-check" />
                    </div>
                    <div className="features-list-text ">
                      20+ Partner Universities in Ireland
                    </div>
                  </div>
                  {/* End Features List Item */}
                  {/* Features List Item */}
                  <div className="d-flex justify-content-center justify-content-lg-start mt-10">
                    <div
                      className={`features-list-icon ${
                        dark ? "features-list-color-1" : ""
                      }`}
                    >
                      <i className="mi-check" />
                    </div>
                    <div className="features-list-text">
                      200+ Students Successfully Enrolled
                    </div>
                  </div>
                  {/* End Features List Item */}
                  {/* Features List Item */}
                  <div className="d-flex justify-content-center justify-content-lg-start mt-10">
                    <div
                      className={`features-list-icon ${
                        dark ? "features-list-color-1" : ""
                      }`}
                    >
                      <i className="mi-check" />
                    </div>
                    <div className="features-list-text">
                      Scholarships up to 50%
                    </div>
                  </div>
                  {/* End Features List Item */}
                </div>
                {/* End Features List */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-stretch order-lg-first">
          <div className="split-image-left rounded-0 pb-xs-70">
            <img
              src={images[currentImageIndex]} // Display the current image
              width={960}
              height={1080}
              alt="Image Description"
              className="wow fadeScaleOutIn"
              data-wow-duration="1.3s"
            />
            {/* Services Buttons */}
            {/* <div
              className="local-scroll container position-absolute bottom-0 start-0 pb-30 pb-xs-0 wow fadeIn animated "
              data-wow-duration="1.3s"
              data-wow-offset={0}
              style={{
                visibility: "visible",
                animationDuration: "1.3s",
                animationName: "fadeIn",
              }}
            >
              <div className="mt-10">
                <a
                  href="#services"
                  className={`btn btn-mod ${
                    dark ? "btn-dark" : "btn-w"
                  } btn-with-icon btn-circle`}
                >
                  <span className="btn-icon color-3">
                    <i className="mi-user" aria-hidden="true" />
                  </span>
                  <span data-btn-animate="y">
                    <span className="btn-animate-y">
                      <span className="btn-animate-y-1 ">
                        Business Analytics
                      </span>
                      <span className="btn-animate-y-2" aria-hidden="true">
                        Business Analytics
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="mt-10">
                <a
                  href="#services"
                  className={`btn btn-mod ${
                    dark ? "btn-dark" : "btn-w"
                  } btn-with-icon btn-circle`}
                >
                  <span className="btn-icon color-2">
                    <i className="mi-search" aria-hidden="true" />
                  </span>
                  <span data-btn-animate="y">
                    <span className="btn-animate-y">
                      <span className="btn-animate-y-1">
                        Post Graduation Courses
                      </span>
                      <span className="btn-animate-y-2" aria-hidden="true">
                        Post Graduates Courses
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="mt-10">
                <a
                  href="#services"
                  className={`btn btn-mod ${
                    dark ? "btn-dark" : "btn-w"
                  } btn-with-icon btn-circle`}
                >
                  <span className="btn-icon color-4">
                    <i className="mi-message" aria-hidden="true" />
                  </span>
                  <span data-btn-animate="y">
                    <span className="btn-animate-y">
                      <span className="btn-animate-y-1">Bsc Nursing</span>
                      <span className="btn-animate-y-2" aria-hidden="true">
                        Bsc Nursing
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div> */}
            <div
              className="local-scroll container position-absolute bottom-0 start-0 pb-30 pb-xs-0 wow fadeIn animated"
              data-wow-duration="1.3s"
              data-wow-offset={0}
              style={{
                visibility: "visible",
                animationDuration: "1.3s",
                animationName: "fadeIn",
              }}
            >
              <div className="mt-10">
                <a
                  href="#services"
                  className={`btn btn-mod ${
                    dark ? "btn-dark" : "btn-w"
                  } btn-with-icon btn-circle`}
                >
                  <span className="btn-icon color-3">
                    <i className="mi-user" aria-hidden="true" />
                  </span>
                  <span data-btn-animate="y">
                    <span className="btn-animate-y">
                      <span className="btn-animate-y-1 small-text">
                        Business Analytics
                      </span>
                      <span className="btn-animate-y-2" aria-hidden="true">
                        Business Analytics
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="mt-10">
                <a
                  href="#services"
                  className={`btn btn-mod ${
                    dark ? "btn-dark" : "btn-w"
                  } btn-with-icon btn-circle`}
                >
                  <span className="btn-icon color-2">
                    <i className="mi-search" aria-hidden="true" />
                  </span>
                  <span data-btn-animate="y">
                    <span className="btn-animate-y">
                      <span className="btn-animate-y-1 small-text">
                        Post Graduation Courses
                      </span>
                      <span className="btn-animate-y-2" aria-hidden="true">
                        Post Graduates Courses
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="mt-10">
                <a
                  href="#services"
                  className={`btn btn-mod ${
                    dark ? "btn-dark" : "btn-w"
                  } btn-with-icon btn-circle`}
                >
                  <span className="btn-icon color-4">
                    <i className="mi-message" aria-hidden="true" />
                  </span>
                  <span data-btn-animate="y">
                    <span className="btn-animate-y">
                      <span className="btn-animate-y-1 small-text">
                        BSc Nursing
                      </span>
                      <span className="btn-animate-y-2" aria-hidden="true">
                        BSc Nursing
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {/* End Services Buttons */}
          </div>
        </div>
      </div>
    </>
  );
}

// import Footer4 from "@/components/footers/Footer4";
// import Header4 from "@/components/headers/Header4";
// import Home4 from "@/components/homes/home-4";
// import Hero4 from "@/components/homes/home-4/heros/Hero4";
// import { corporateMultipage } from "@/data/menu";

// export const metadata = {
//   title: "Nirmala Study Abroad Ireland ",
//   description:
//     "Nirmala Study Abroad your trustworthy partner – we’ve got everything you need for a successful study abroad adventure! Talk to our experts",
// };
// export default function Home4SplitMultiPage() {
//   return (
//     <>
//       <div className="theme-corporate">
//         <div className="page" id="top">
//           <nav className="main-nav transparent sticky wow-menubar wch-unset">
//             <Header4 links={corporateMultipage} />
//           </nav>

//           <main id="main">
//             <section className="home-section scrollSpysection" id="home">
//               <Hero4 />
//             </section>

//             <Home4 />
//           </main>
//           <footer className="footer-2 pb-50">
//             <Footer4 />
//           </footer>
//         </div>{" "}
//       </div>
//     </>
//   );
// }

import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import Home4 from "@/components/homes/home-4";
import Hero4 from "@/components/homes/home-4/heros/Hero4";
import { corporateMultipage } from "@/data/menu";
import StickyContactModal from "@/components/stickymodal";
import WhatsappIcon from "@/components/whatsappicon"; // Import the WhatsApp Icon component

export const metadata = {
  title: "Nirmala Study Abroad Ireland ",
  description:
    "Nirmala Study Abroad your trustworthy partner – we’ve got everything you need for a successful study abroad adventure! Talk to our experts",
};

export default function Home4SplitMultiPage() {
  return (
    <>
      <div className="theme-corporate">
        <div className="page" id="top">
          <nav className="main-nav transparent sticky wow-menubar wch-unset">
            <Header4 links={corporateMultipage} />
          </nav>
          <main id="main">
            <section className="home-section scrollSpysection" id="home">
              <Hero4 />
            </section>

            <Home4 />
          </main>
          <footer className="footer-2 pb-50">
            <Footer4 />
          </footer>
          {/* Add the Sticky Contact Modal here */}
          <StickyContactModal />
          {/* WhatsApp Icon */}
          <WhatsappIcon /> {/* Use the WhatsApp Icon component */}
        </div>
      </div>
    </>
  );
}

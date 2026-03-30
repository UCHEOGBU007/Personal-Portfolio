import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Styles from "./Clients.module.css";
import { PiHandshakeThin } from "react-icons/pi";
import { GoThumbsup } from "react-icons/go";
import { PiUserCheck } from "react-icons/pi";
import { div } from "framer-motion/client";

export default function Cients() {
  //Testimonies styling arays.
  const responsive = {
    superLargeDesktop: {
      // Styling break points accordingly.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    //Testimonies card container start here.
    <div className={Styles.testimonies}>
      <div className={Styles.testimonials}>
        <h5>Testimonials</h5>
      </div>
      <Carousel responsive={responsive}>
        <div>
          {/* Customers served card */}
          <figure className={Styles.testimoniesdesign}>
            <div>
              <PiHandshakeThin />
            </div>
            <figcaption>
              <span>6 +</span>
              <p>Customers i have Served</p>
            </figcaption>
          </figure>
        </div>

        {/* satified client card. */}
        <div>
          <figure className={Styles.testimoniesdesign}>
            <div>
              <GoThumbsup />
            </div>
            <figcaption>
              <span>95 %</span>
              <p>Of Our Clients Recommends us.</p>
            </figcaption>
          </figure>
        </div>

        {/* Years of meeting client needs. */}
        <div>
          <figure className={Styles.testimoniesdesign}>
            <div>
              <PiUserCheck />
            </div>
            <figcaption>
              <span>3+</span>
              <p>Years of Meeting Clients Needs.</p>
            </figcaption>
          </figure>
        </div>
      </Carousel>
    </div>

    // <section className={Styles.testimonies}>
    //   {/* <h5>SATISFACTORY</h5> */}

    //   <div className={Styles.testimoniescards}>
    // <figure className={Styles.testimoniesdesign}>
    //   <div>
    //     <PiHandshakeThin />
    //   </div>
    //   <figcaption>
    //     <span>{customers} +</span>
    //     <p>Customers we have Served</p>
    //   </figcaption>
    // </figure>

    // <figure className={Styles.testimoniesdesign}>
    //   <div>
    //     <GoThumbsup />
    //   </div>
    //   <figcaption>
    //     <span>{clients} %</span>
    //     <p>Of Our Clients Recommends us.</p>
    //   </figcaption>
    // </figure>

    // <figure className={Styles.testimoniesdesign}>
    //   <div>
    //     <PiUserCheck />
    //   </div>
    //   <figcaption>
    //     <span>{meeting} +</span>
    //     <p>Years of Meeting Clients Needs.</p>
    //   </figcaption>
    // </figure>
    //   </div>
    // </section>
  );
}

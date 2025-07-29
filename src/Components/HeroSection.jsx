import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="py-5 text-center bg-light">
      <div className="container">

        {/* Quote Block */}
        <motion.div
          className="text-center mt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div
            className="display-1"
            style={{
              color: "#00bfff",
              lineHeight: "0.5",
              fontWeight: "bold",
            }}
          >
            &ldquo;
          </div>
          <p
            className="mx-auto fs-3 fw-medium"
            style={{
              maxWidth: "1000px",
              color: "#093b52",
              marginTop: "5px",
              lineHeight: "1.6",
            }}
          >
            Show that you can sell your idea,<br />
            recruit the talent needed to achieve<br />
            success and win over customers and<br />
            partners.
          </p>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="display-5 fw-bold text-success"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Connecting Ideas with Capital
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="lead mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Pitch your startup to top investors and bring your vision to life.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="d-flex flex-wrap justify-content-center gap-3 mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a href="/EnpRegistration" className="btn btn-outline-success btn-lg px-4">
            Join as Entrepreneur
          </a>
          <a href="/InvestorRegistration" className="btn btn-outline-success btn-lg px-4">
            Join as Investor
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;

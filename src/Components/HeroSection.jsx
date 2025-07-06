import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section 
      style={{ 
        backgroundColor: "#e6f9e6",
        padding: "2rem 0",
        overflow: "hidden"
      }}
    >
      <div className="container">
        {/* Quote Block */}
        <motion.div
          style={{ 
            textAlign: "center",
            marginTop: "1rem",
            marginBottom: "2rem"
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div 
            style={{ 
              fontSize: "4rem",
              color: "#00bfff",
              lineHeight: "0.5",
              marginBottom: "1rem"
            }}
          >
            &ldquo;
          </div>
          <p
            style={{
              maxWidth: "1000px",
              fontSize: "2rem",
              color: "#093b52",
              lineHeight: "1.4",
              margin: "0 auto",
              padding: "0 1rem"
            }}
          >
            Show that you can sell your idea, recruit the talent needed to achieve
            success and win over customers and partners.
          </p>
        </motion.div>

        <motion.h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            color: "#28a745",
            textAlign: "center",
            marginBottom: "1rem"
          }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Connecting Ideas with Capital
        </motion.h1>

        <motion.p
          style={{
            fontSize: "1.25rem",
            color: "#333",
            textAlign: "center",
            marginBottom: "2rem",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Pitch your startup to top investors and bring your vision to life.
        </motion.p>

        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "1rem"
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a 
            href="/EnpRegistration" 
            style={{
              minWidth: "200px",
              margin: "0.25rem",
              padding: "0.5rem 1rem",
              fontSize: "1.25rem",
              lineHeight: "1.5",
              border: "1px solid #28a745",
              color: "#28a745",
              textDecoration: "none",
              borderRadius: "0.3rem",
              textAlign: "center",
              transition: "all 0.2s"
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#28a745";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#28a745";
            }}
          >
            Join as Entrepreneur
          </a>
          <a 
            href="/InvestorRegistration" 
            style={{
              minWidth: "200px",
              margin: "0.25rem",
              padding: "0.5rem 1rem",
              fontSize: "1.25rem",
              lineHeight: "1.5",
              border: "1px solid #28a745",
              color: "#28a745",
              textDecoration: "none",
              borderRadius: "0.3rem",
              textAlign: "center",
              transition: "all 0.2s"
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#28a745";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#28a745";
            }}
          >
            Join as Investor
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
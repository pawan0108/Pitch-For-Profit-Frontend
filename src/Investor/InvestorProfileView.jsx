import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import "../assets/css/InvestorProfile.css";
import defaultImg from "../assets/img/admin/admin.png";

const InvestorProfileView = () => {
  const { id } = useParams(); // 👈 Get investor ID from URL
  const [investor, setInvestor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInvestor = async () => {
      try {
        const res = await axios.get(`https://pitch-for-profit-backend.onrender.com/investor/${id}`);
        setInvestor(res.data);
      } catch (err) {
        console.error("Error fetching investor:", err);
        setError("Failed to fetch investor details.");
      } finally {
        setLoading(false);
      }
    };

    fetchInvestor();
  }, [id]);

  if (loading) return <div className="loading-text">Loading...</div>;
  if (error) return <div className="error-text">{error}</div>;
  if (!investor) return <div className="error-text">Investor not found.</div>;

  if (investor.isActive === false) {
    return (
      <div className="deactivated-message">
        Your Account is deactivated by Admin
      </div>
    );
  }

  return (
    <motion.div
      className="profile-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="profile-left">
        <div className="profile-image-wrapper">
          <img
            src={investor.photo || defaultImg}
            alt="Profile"
            className="profile-image"
          />
        </div>
        <h1 className="investor-name">{investor.name || "Investor"}</h1>
        <h2 className="investor-role">{investor.role || "Investor"}</h2>

        <div className="basic-info">
          <p><strong>Gender:</strong> {investor.gender || "N/A"}</p>
          <p><strong>Age:</strong> {investor.age || "N/A"}</p>
          <p><strong>Education:</strong> {investor.education || "N/A"}</p>
          <p><strong>Location:</strong> {investor.city}, {investor.state}, {investor.country}</p>
        </div>
      </div>

      <div className="profile-right">
        <InfoBox title="Firm Details">
          <p><strong>Firm Name:</strong> {investor.fname}</p>
          <p><strong>Firm Address:</strong> {investor.faddress}</p>
        </InfoBox>

        <InfoBox title="Contact Info">
          <p><strong>Mobile:</strong> {investor.mobile}</p>
          <p><strong>Email:</strong> {investor.email}</p>
        </InfoBox>

        <InfoBox title="Categories">
          <p>{Array.isArray(investor.categories) ? investor.categories.join(", ") : investor.categories}</p>
        </InfoBox>

        <InfoBox title="Registered On">
          <p>{investor.regdate ? new Date(investor.regdate).toLocaleDateString() : "N/A"}</p>
        </InfoBox>
      </div>
    </motion.div>
  );
};

const InfoBox = ({ title, children }) => (
  <motion.div
    className="info-box"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 150 }}
  >
    <h3>{title}</h3>
    {children}
  </motion.div>
);

export default InvestorProfileView;

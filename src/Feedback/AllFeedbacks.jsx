import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Spinner, Row, Col, Container, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import defaultImg from "../assets/img/admin/admin.png";

const AllFeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get(
          "https://pitch-for-profit-backend.onrender.com/feedback"
        );
        setFeedbacks(response.data.feedback || []);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const renderFeedbacks = () =>
    feedbacks.slice(0, visibleCount).map((fb) => {
      const user = fb.user || {};
      const date = fb.createdAt ? new Date(fb.createdAt) : null;

      return (
        <Col key={fb._id} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex">
          <Card
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Card.Body style={{ flex: "1 1 auto", display: "flex", flexDirection: "column" }}>
              <div className="d-flex align-items-center mb-3">
                <img
                  src={user.profilePic || defaultImg}
                  alt={user.name || "User"}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginRight: "1rem",
                  }}
                />
                <div>
                  <h6 className="mb-0">{user.name || "Unknown User"}</h6>
                  <small className="text-muted">{fb.userType}</small>
                </div>
              </div>

              <div className="mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    style={{ color: i < fb.rating ? "#ffc107" : "#e4e5e9" }}
                  />
                ))}
              </div>

              <p style={{ flexGrow: 1 }}>{fb.message}</p>

              <small className="text-muted mt-auto">
                Posted on: {date?.toLocaleDateString()}
              </small>
            </Card.Body>
          </Card>
        </Col>
      );
    });

  return (
    <div className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">🌟 User Testimonials</h2>

        {loading ? (
          <div className="text-center">
            <Spinner animation="border" />
          </div>
        ) : feedbacks.length === 0 ? (
          <p className="text-center text-muted">No feedback submitted yet.</p>
        ) : (
          <>
            <Row>{renderFeedbacks()}</Row>

            {visibleCount < feedbacks.length && (
              <div className="text-center mt-4">
                <Button onClick={loadMore}>Load More Testimonials</Button>
              </div>
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default AllFeedbacks;

import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const ManageIcons = () => {
  const [icons, setIcons] = useState([]);

  const preload = async () => {
    const response = await axios.get("http://localhost:5000/api/v1/icons");

    setIcons(response.data.icons);
  };

  useEffect(() => {
    preload();
  }, []);

  return (
    <div>
      <Navigation />
      <div className="row">
        <div className="col-12">
          <Container
            style={{
              backgroundColor: "#F8F8F9",
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "30px",
              borderRadius: "10px",
              textAlign: "center",
              marginTop: "30px",
              fontFamily: "poppins",
            }}
          >
            <h1>Preview</h1>

            <h1>Name</h1>
            <h1>Edit</h1>
          </Container>

          <Container
            style={{
              backgroundColor: "#F8F8F9",
              padding: "30px",
              borderRadius: "10px",
              height: "70vh",
              overflow: "scroll",
            }}
          >
            {icons.map((icon, index) => {
              return (
                <Container
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "30px",
                    backgroundColor: "#F8F8F9",
                  }}
                >
                  <img
                    src={icon.URL}
                    style={{ width: "5%" }}
                    alt={icon.iconName}
                  />

                  <h3>{icon.iconName}</h3>

                  <Link
                    to={{
                      pathname: `/update/icon/${icon._id}`,
                      state: icon,
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.0207 5.82839L15.8491 2.99996L20.7988 7.94971L17.9704 10.7781M13.0207 5.82839L3.41405 15.435C3.22652 15.6225 3.12116 15.8769 3.12116 16.1421V20.6776H7.65669C7.92191 20.6776 8.17626 20.5723 8.3638 20.3847L17.9704 10.7781M13.0207 5.82839L17.9704 10.7781"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </Container>
              );
            })}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ManageIcons;

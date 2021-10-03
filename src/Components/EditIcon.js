import React, { useState } from "react";
import { editIcon } from "./helper/editIconsHelper";
import { Form, Col, Button, Container } from "react-bootstrap";
import Navigation from "./Navigation";
import { useLocation } from "react-router-dom";

const EditIcon = ({ match }) => {
  const location = useLocation();
  const [values, setValues] = useState({
    image: location.state.URL,
    description: location.state.description,
    category: location.state.category,
    tags: location.state.tags.toString(),
    subCategory: location.state.subCategory,
    error: "",
    success: "",
  });

  const { description, category, tags, subCategory, image, error, success } =
    values;

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    let tagsArray = tags.split(",");
    const valuesObject = {
      description: description,
      category: category,
      subCategory: subCategory,
      tags: tagsArray,
    };

    editIcon(valuesObject, match.params.iconId).then((data) => {
      if (data?.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          description: "",
          category: "",
          tags: [],
          loading: false,
          error: "",
          success: data.message,
        });
      }
    });
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setValues({ ...values, [event.target.name]: value });
  };

  const editIconForm = () => (
    <Container
      className="formContainer"
      style={{ marginTop: "30px", width: "40%" }}
    >
      <Form>
        <Form.Row>
          <span>Preview:-</span>
          <img src={image} alt="imagesvg" />
          <Form.Group as={Col}>
            <Form.Label>Category</Form.Label>
            <Form.Control
              placeholder="Category"
              onChange={handleChange}
              name="category"
              value={category}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Sub-Category</Form.Label>
            <Form.Control
              placeholder="Sub-Category"
              onChange={handleChange}
              name="subCategory"
              value={subCategory}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Description</Form.Label>
            <Form.Control
              placeholder="Description"
              onChange={handleChange}
              name="description"
              value={description}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Tags</Form.Label>
            <Form.Control
              placeholder="Tags"
              onChange={handleChange}
              name="tags"
              value={tags}
            />
          </Form.Group>
        </Form.Row>
        <div className="d-grid gap-2">
          <Button
            variant="dark"
            type="submit"
            style={{ marginTop: "20px" }}
            onClick={onSubmit}
            size="lg"
          >
            Update Icon
          </Button>
        </div>
      </Form>
    </Container>
  );

  const successMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{
        display: success ? "" : "none",
        width: "50%",
      }}
    >
      <h4 style={{ textAlign: "center" }}>{success}</h4>
    </div>
  );

  const errorMessage = () => (
    <div
      className="alert alert-danger mt-3"
      style={{ display: error ? "" : "none", width: "50%" }}
    >
      <h4>{error}Failed to add icon</h4>
    </div>
  );

  return (
    <div>
      <Navigation />
      <Container
        style={{
          backgroundColor: "#F8F8F9",
          display: "flex",
          justifyContent: "center",
          marginBottom: "5px",
          borderRadius: "10px",
          alignItems: "center",
          marginTop: "30px",
          fontFamily: "poppins",
          width: "50%",
          height: "80px",
        }}
      >
        <h1>Edit Icon</h1>
      </Container>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {success ? successMessage() : ""}
        {error ? errorMessage() : ""}
      </div>
      {editIconForm()}
    </div>
  );
};

export default EditIcon;

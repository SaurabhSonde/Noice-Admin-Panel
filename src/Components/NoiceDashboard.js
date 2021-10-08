import React, { useState } from "react";
import { Form, Col, Button, Container } from "react-bootstrap";
import Navigation from "./Navigation";
import { addTheIcons } from "./helper/addIconHelper";

const NoiceDashboard = () => {
  const [values, setValues] = useState({
    image: "",
    category: "",
    subCategory: "",
    description: "",
    tags: [],
    error: "",
    success: false,
  });

  const [iconFiles, setIconFiles] = useState([]);

  const { category, subCategory, description, tags, error, success } = values;

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", success: false });
    let tagsArray = tags.split(",");
    const formData = new FormData();

    for (let i = 0; i < iconFiles.length; i++) {
      formData.append("image", iconFiles[i]);
    }
    formData.append("category", category);
    formData.append("subCategory", subCategory);
    formData.append("description", description);
    for (let i = 0; i < tagsArray.length; i++) {
      formData.append("tags", tagsArray[i]);
    }
    try {
      addTheIcons(formData).then((data) => {
        setValues({
          ...values,
          name: "",
          category: "",
          subCategory: "",
          tags: [],
          description: "",
          error: "",
          success: true,
        });
      });
    } catch (error) {
      setValues({
        ...values,
        error: "Failed to add icons.",
      });
    }
  };

  // handling text
  const handleChange = (event) => {
    const value = event.target.value;
    setValues({ ...values, [event.target.name]: value });
  };

  // handling media
  const handleChangeMedia = (event, name) => {
    if (name === "image") {
      setIconFiles(event.target.files);
    }
  };

  const addIcon = () => {
    return (
      <Container
        className="formContainer"
        style={{ marginTop: "5px", width: "40%" }}
      >
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formFile">
              <br />
              <Form.Control
                type="file"
                multiple
                onChange={(event) => {
                  handleChangeMedia(event, "image");
                }}
                name="image"
                accept="image"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Category</Form.Label>
              <Form.Control
                placeholder="Category"
                onChange={handleChange}
                name="category"
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
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Description</Form.Label>
              <Form.Control
                placeholder="Description"
                onChange={handleChange}
                name="description"
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
              Add Icon
            </Button>
          </div>
        </Form>
      </Container>
    );
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{
        display: success ? "" : "none",
        width: "50%",
      }}
    >
      <h4 style={{ textAlign: "center" }}>Icons added successfully</h4>
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
          marginTop: "10px",
          fontFamily: "poppins",
          width: "50%",
          height: "80px",
        }}
      >
        <h1>Add Icons</h1>
      </Container>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {success ? successMessage() : ""}
        {error ? errorMessage() : ""}
      </div>

      {addIcon()}
    </div>
  );
};

export default NoiceDashboard;

import React from "react";
import { Button, Form } from "react-bootstrap";

const AddEntryForm = () => {
  return (
    <Form className="addForm">
      <h6>Add Entry</h6>
      <Form.Group controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="Title of this place visited"
          required={true}
        />
      </Form.Group>

      <Form.Group controlId="formBasicDesc">
        <Form.Label>Comment</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="comments"
          placeholder="comment how this place was"
          required={true}
        />
      </Form.Group>

      <Form.Group controlId="formBasicRating">
        <Form.Label>Rating</Form.Label>
        <Form.Control
          type="number"
          name="rating"
          placeholder="Rate this place over 10"
          required={true}
        />
      </Form.Group>

      <Form.Group controlId="formBasicImage">
        <Form.Label>Image</Form.Label>
        <Form.Control type="url" placeholder="Image of location" name="image" />
        <Form.Text className="text-muted">
          Google image of this location and provide link.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicDesc">
        <Form.Label>Visited Date</Form.Label>
        <Form.Control
          type="date"
          name="visitDate"
          required={true}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddEntryForm;

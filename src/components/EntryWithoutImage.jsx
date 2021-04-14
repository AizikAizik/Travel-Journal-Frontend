import React from "react";
import { Button, Card } from "react-bootstrap";

const EntryWithoutImage = ({entry}) => {
  return (
    <Card style={{ width: "18rem", margin: "8px" }}>
      <Card.Body>
        <Card.Title style={{ height: "40px", fontFamily: "sans-serif" }}>
          {entry.title}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Rating: {entry.rating}/10
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 py-2 text-muted">
          Visited Date: {new Date(entry.visitDate).toLocaleDateString()}
        </Card.Subtitle>
        <Card.Text>{entry.comments}</Card.Text>
        <Button
          variant="danger"
          title="delete entry"
          style={{
            borderRadius: "50%",
            width: "20px",
            marginLeft: "80%",
          }}
        >
          <i className="fas fa-trash" style={{ marginLeft: "-5px" }}></i>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default EntryWithoutImage;

import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteJournalEntries, fetchJornalEntries } from "../actions/journalActions";
import Loader from "./Loader";
import Message from "./Message";

const EntryWithImage = ({ entry, onClose }) => {
  const dispatch = useDispatch();

  const deleteJournal = useSelector((state) => state.deleteJournal);

  const { error, loading } = deleteJournal;

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this Entry?")) {
      await dispatch(deleteJournalEntries(entry._id));
      await dispatch(fetchJornalEntries());
      onClose();
    }
  };

  return (
    <Card style={{ width: "18rem", margin: "8px" }}>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Card.Img variant="top" src={entry.image} />
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
          onClick={handleDelete}
        >
          <i className="fas fa-trash" style={{ marginLeft: "-5px" }}></i>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default EntryWithImage;

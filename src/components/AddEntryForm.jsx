import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addJournalEntry, fetchJornalEntries } from "../actions/journalActions";
import Loader from "./Loader";
import Message from "./Message";

const AddEntryForm = ({points, onClose}) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch()

  const addedJournal = useSelector(state => state.addedJournal)

  const {error, loading, entry}  = addedJournal;

  // useEffect(() => {
  //   if(entry){
  //     dispatch(fetchJornalEntries())
  //   }
  // }, [entry, dispatch])

  const onSubmitEntry = (data) => {
    data.latitude = points.latitude;
    data.longitude = points.longitude;
    dispatch(addJournalEntry(data));
    onClose();
  };

  return (
    <Form className="addForm" onSubmit={handleSubmit(onSubmitEntry)}>
      <h6>Add Entry</h6>
      { error && <Message variant='danger'>{error}</Message> }
      { loading && <Loader /> }
      <Form.Group controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="Title of this place visited"
          required={true}
          {...register("title")}
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
          {...register("comments")}
        />
      </Form.Group>

      <Form.Group controlId="formBasicRating">
        <Form.Label>Rating</Form.Label>
        <Form.Control
          type="number"
          name="rating"
          placeholder="Rate this place over 10"
          required={true}
          {...register("rating")}
        />
      </Form.Group>

      <Form.Group controlId="formBasicImage">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="url"
          placeholder="Image of location"
          name="image"
          {...register("image")}
        />
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
          {...register("visitDate")}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddEntryForm;

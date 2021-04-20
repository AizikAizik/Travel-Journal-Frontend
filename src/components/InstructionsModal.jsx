import React from "react";
import { Button, Modal } from "react-bootstrap";

const InstructionsModal = (props) => {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Instructions
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Instructions</h4> */}
        <p>
          Double click or tap on any given point on the map to input an Entry on the place you visited.
          To add images to an Entry search for an image of that location online then copy & paste the URL in the image input box (but this is not compulsory).
          Then when rating an Entry the min is 0 and max is 10
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InstructionsModal;

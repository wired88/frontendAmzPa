import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function FailedModal() {
  const [show, setShow] = useState(true);

  const handleClose = () => {
      setShow(false);
      window.location.href = "http://localhost:5173/";
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Failed</Modal.Title>
        </Modal.Header>
        <Modal.Body>There was an error while sending the Message. </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Try again
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Go to Homepage
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FailedModal;









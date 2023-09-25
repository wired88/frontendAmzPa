import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Check } from 'react-bootstrap-icons';

function SuccessModal() {
  const [show, setShow] = useState(true);

  const handleClose = () => {
      setShow(false);
      window.location.href = "http://localhost:5173/";
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Check />
          Your Message has been successfully sent!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Go to Homepage
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SuccessModal;
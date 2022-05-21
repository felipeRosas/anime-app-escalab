import React from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
const AnimeDetail = (props) => {
  const { handleCloseModal, show,animeDetail } = props;
  console.log(props)
  return (
    <>
      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {animeDetail?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            {}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    animeDetail: state.animeDetail,
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(AnimeDetail);
AnimeDetail.displayName = "Anime Detail";

import { bool, func, object } from "prop-types";
import React from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";

const AnimeDetail = (props) => {
  const { handleCloseModal,animeDetailToModal,showModal } = props;
  const {episodes, images, rating, synopsis, title, trailer,studios} = animeDetailToModal
  console.log('animedetail',props)
  return (
    <>
      <Modal
        show={showModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={images?.jpg?.image_url} alt='animeimg' />
          <p>
            {synopsis}
          </p>
          <strong>Episodes </strong> {episodes}<br/>
          <strong>Rating </strong> {rating}<br/>
          <strong>Studios </strong> {studios?.length && studios.map(studio=>(`${studio.name }`))}<br/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>handleCloseModal({data:{},show:false})}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

AnimeDetail.prototypes={
  handleCloseModal : func,
  animeDetailToModal: object,
  showModal:bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    animeDetailToModal: state.animeDetail,
    showModal: state.showModal
  };
};

const mapDispatchToProps = {
 
};

export default connect(mapStateToProps, mapDispatchToProps)(AnimeDetail);
AnimeDetail.displayName = "Anime Detail";

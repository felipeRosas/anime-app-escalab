import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import {BsYoutube} from 'react-icons/bs'
import { Link } from "react-router-dom";
import useModal from "../hooks/useModal";
import AnimeDetail from "./AnimeDetail";
import ModalDetail from "./ModalDetail";

const AnimeCard = ({ images, title, trailer, studios, rating,episodes }) => {

    const { modal, handleCloseModal, handleOpenModal } = useModal();

  return (
    <Card style={{ width: "16rem" }}>
      <Card.Img variant="top" src={images.jpg.image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <ListGroup variant="flush">
            {/* <ListGroup.Item><strong>Studio: </strong><br/>{studios.map(studio=>(`${studio.name}`))}</ListGroup.Item>
            <ListGroup.Item><strong>Episodes: </strong>{episodes}</ListGroup.Item>
            <ListGroup.Item><strong>Rating: </strong>{rating}</ListGroup.Item> */}
            <ListGroup.Item>
                <strong className="mr-2">Trailer</strong>
                <a href={trailer.url} target='_blank' rel="noopener noreferrer"><BsYoutube size='2em'/></a>
            </ListGroup.Item>
          </ListGroup>
        </Card.Text>
        <Button variant="info" onClick={()=>handleOpenModal}>Ver detalle</Button>
      </Card.Body>
      <ModalDetail isOpen={modal} onClose={handleCloseModal}> 
          <AnimeDetail data={{title, trailer, studios, rating,episodes}} show={modal}/> 
      </ModalDetail>
    </Card>
  );
};

export default AnimeCard;

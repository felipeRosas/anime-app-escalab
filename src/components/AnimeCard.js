import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import {BsYoutube} from 'react-icons/bs'
import useModal from "../hooks/useModal";
import AnimeDetail from "./AnimeDetail";

const AnimeCard = ({ images, title, trailer, studios, rating,episodes,synopsis }) => {

    const { handleOpenModal } = useModal();

  return (
    <Card style={{ width: "16rem" }}>
      <Card.Img variant="top" src={images.jpg.image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>
                <strong className="mr-2">Trailer</strong>
                <a href={trailer.url} target='_blank' rel="noopener noreferrer"><BsYoutube size='2em'/></a>
            </ListGroup.Item>
          </ListGroup>
        </Card.Text>
        <Button variant="info" onClick={()=>handleOpenModal({images, title, trailer, studios, rating,episodes,synopsis})}>Ver detalle</Button>
      </Card.Body>
          
    </Card>
  );
};

export default AnimeCard;

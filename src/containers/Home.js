import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import AnimeCard from "../components/AnimeCard";
import Loader from "../components/Loader";
import useGetActualSeason from "../hooks/useGetActualSeason";
import { Row,Col } from "react-bootstrap";
import Error from "../components/Error";
import img from '../assets/static/img/error.png'
import AnimeDetail from "../components/AnimeDetail";
import useModal from "../hooks/useModal";

const Home = (props) => {
    const {actualSeasonList} = props

    const { modal, handleCloseModal } = useModal();
  const {  loading, error, getActualSeasonAnimeLis } =
    useGetActualSeason();

  useEffect(() => {
    getActualSeasonAnimeLis();
  }, []);

  return (
    <Row xs={1} md={4} className="g-4">
      <AnimeDetail show={modal} handleCloseModal={handleCloseModal}/> 
      {loading ? (
        <Loader />
      ) : error ?(<Error img={img} title={'Ocurrio un error al cargar la Información'}/>)
        : (
          actualSeasonList.data.map(({ mal_id, ...otherAnimeProps }) => (
            <Col key={mal_id}>
              <AnimeCard key={mal_id} {...otherAnimeProps} />
            </Col>
          ))
        )
    }
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    actualSeasonList: state.actualSeason,
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
Home.displayName = "Home component";

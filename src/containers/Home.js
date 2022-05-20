import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getActualSeasonAnimeList } from "../actions";
import AnimeCard from "../components/AnimeCard";
import Loader from "../components/Loader";
import useGetActualSeason from "../hooks/useGetActualSeason";
import { Row,Col } from "react-bootstrap";
import Error from "../components/Error";
import img from '../assets/static/img/error.png'
const Home = (props) => {
    console.log('props',props)
    const {actualSeasonList} = props
  const {  loading, error, getActualSeasonAnimeLis } =
    useGetActualSeason();

  useEffect(() => {
    getActualSeasonAnimeLis();
  }, []);

  return (
    <Row xs={1} md={4} className="g-4">
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
  getActualSeasonAnimeList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
Home.displayName = "Home component";

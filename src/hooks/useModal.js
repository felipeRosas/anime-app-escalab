import { useState } from "react";
import { setAnimeDetail } from "../actions";
import { useDispatch } from "react-redux";

const useModal = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch()

  const handleCloseModal = () => {
    dispatch(setAnimeDetail(null))
    setModal(false);
  };

  const handleOpenModal = (data) => {
    console.log('open')
    dispatch(setAnimeDetail(data))
    setModal(true);
  };

  return { modal, handleCloseModal, handleOpenModal };
};

export default useModal;
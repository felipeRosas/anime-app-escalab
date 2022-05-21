import { useState } from "react";
import { setAnimeDetail } from "../actions";
import { useDispatch } from "react-redux";

const useModal = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch()

  const handleCloseModal = (info) => {
    console.log('close')
    setModal(false);
    dispatch(setAnimeDetail(info))
  };

  const handleOpenModal = (info) => {
    console.log('open')
    setModal(true);
    dispatch(setAnimeDetail(info))
  };

  return { modal, handleCloseModal, handleOpenModal };
};

export default useModal;
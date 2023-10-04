import { useDispatch } from "react-redux";
import { pokemonApi } from "../api";

const ResetApi = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(pokemonApi.util.resetApiState());
  };

  return <button onClick={handleClick}>Reset Api State</button>;
};

export default ResetApi;

import { useGetPokemonByNameQuery } from "../api";

const Pokemon = ({ name }) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery(name);

  return (
    <div style={{ margin: "16px", padding: "8px", border: "1px solid" }}>
      <h1>Pokemon: "{name}"</h1>

      {isLoading && "loading"}
      {!isLoading && data && (
        <>
          <p>id: {data.id}</p>
          <p>name: {data.name}</p>
        </>
      )}
      {!!error && error?.error}
    </div>
  );
};

export default Pokemon;

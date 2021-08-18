export const fetchRickandMortyCharacters = async () => {
  const res = await fetch(
    'https://rickandmortyapi.com/api/character'
  );
  const json = await res.json();

  return json.results.map(({ image, name }) => ({
    name, image
  }));
};

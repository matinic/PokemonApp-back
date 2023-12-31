const getAllPokemons = require("../../controllers_utils/ApiControllers/getAllPokemons");
const getAllPokemonsDb = require("../../controllers_utils/DbControllers/pokemonDb/getAllPokemonsDb");

module.exports = async (req, res) => {
  try {
    const allPokemons = await getAllPokemons();
    const allPokemonsDb = await getAllPokemonsDb();
    if(allPokemonsDb.length){
      return res
      .status(200)
      .json([...allPokemons,...allPokemonsDb])
    }else{
      return res
      .status(200)
      .json(allPokemons)
    }
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

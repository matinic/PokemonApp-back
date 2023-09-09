const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const pokemonsRoutes = require('./pokemons.js')
const pokemons = require('./pokemons.js')
const types = require('./types.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/',(req,res)=>{
    res.send('<h1>POKEMON API</h1>')
})
router.use('/pokemons',pokemons)
router.use('/types',types)




module.exports = router;

require('dotenv').config()
const {get} = require('env-var')

// Establecemos las variables del entorno a usar
const envs = {
        PORT: get('PORT').required().asPortNumber(),
        PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
}

// Exportamos la variables
module.exports = {
        envs
}
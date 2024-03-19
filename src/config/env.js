import envvar from 'env-var'
// const {get} = require('env-var')

import env from 'dotenv'
env.config()
// require('dotenv').config()


// Establecemos las variables del entorno a usar
export const envs = {
        PORT: envvar.get('PORT').required().asPortNumber(),
        PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
}

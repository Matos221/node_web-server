import { envs } from './config/env.js'
// const { envs } = require('./config/env')

import { startServer } from './server/server.js'
// const { startServer } = require('./server/server')


const main = () => {
        startServer({
                port: envs.PORT,
                public_path : envs.PUBLIC_PATH
        })
}

// Funcion agnóstica autoconvocada. Es "agnóstica" porque no tiene nombre y "autoconvocada" porque se ejecuta con los parentesis
(async () => {
        main()
})()


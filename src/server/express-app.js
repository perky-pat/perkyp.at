import config from './config'
import express from 'express'
import compression from 'compression'
import path from 'path'
import d from 'debug'
import engine from 'ejs'
import util from 'util'
import fs from 'fs'
import siteRouter from './routes/site'
import packageJson from '../../package.json'

// Data
import data from '../data'

const isProd = config.env !== 'development'
const debug = d('app:main') // Site router

const app = express()
app.set('port', config.port)
app.enable('trust proxy') // needed to correctly detext http or https in requests

// Set template engine (use ejs but on index.html generated by Create React App)
app.engine('html', engine.__express)
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'build'))

app.use(compression())
// app.enable('view cache')

function initRoutes () {
  // Time used by max-age cache
  const oneSec = 1000
  const oneMin = oneSec * 60
  const oneHour = oneMin * 60
  const onDay = oneHour * 24
  const onWeek = onDay * 7
  const oneMonth = onDay * 30

  // Static files w cache
  app.use(
    '/favicon.ico',
    express.static('build/favicon.ico', {
      maxAge: isProd ? oneMonth : oneSec
    })
  )
  app.use(
    '/robots.txt',
    express.static('build/robots.txt', {
      maxAge: isProd ? oneMonth : oneSec
    })
  )
  app.use(
    '/static',
    express.static('build/static', {
      maxAge: isProd ? onDay : oneSec
    })
  )

  /**
   * Get app version from package.json
   */
  app.get('/version', (req, res) => {
    res.send(`Version: ${packageJson.version}`)
  })

  // React app (routing is managed by React router, including 404)
  app.use('/', siteRouter)
}

initRoutes()

export default app

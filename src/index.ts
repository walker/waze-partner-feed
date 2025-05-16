import { WazePFError } from './error'

const https = require('https')
const querystring = require('querystring')
const _ = require('lodash')
const FormData = require('form-data')
const fs = require('fs')
const path = require('path')
const axios = require('axios')

interface Waze {
}

/**
 * Core class Cityworks with most of the authentication and install capabilities functions
 */
class WazePF implements Waze {
  
}
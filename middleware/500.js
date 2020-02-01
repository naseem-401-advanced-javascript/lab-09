'use strict'


/**
 *the middlewere will hit on server error 
 * @param {object} req 
 * @param {object} res 
 * @param {*} next 
 */
function errorHandler(err, req, res, next) {
    res.status(500)
    res.Message = 'server error'
    res.json({ error: err })
}

module.exports = errorHandler
/* eslint-disable no-undef */
/* eslint-disable strict */

'use strict';

/**
 *the middlewere will hit on server error
 * @param {object} req
 * @param {object} res
 * @param {*} next
 */
function errorHandler(err, req, res) {
  res.status(500);
  res.Message = 'server error';
  // eslint-disable-next-line comma-dangle
  res.json({ error: err });
}

module.exports = errorHandler;
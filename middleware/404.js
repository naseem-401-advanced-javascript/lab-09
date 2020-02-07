/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */


/**
 *the middlewere will hit on invalid routes
 * @param {object} req
 * @param {object} res
 * @param {*} next
 */
function notFoundHandler(req, res, next) {
  res.status(404);
  res.message = 'NOT FOUND';
  res.json({ error: 'NOT FOUND' });
}

module.exports = notFoundHandler;
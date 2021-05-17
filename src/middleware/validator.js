'use strict';
/**
 *
 * @param {object} req http request and it's properties
 * @param {object} res http response send from express when it it gets a request
 * @param {method} next for skipping to the next step
 */
module.exports = (req, res, next) => {
  if (req.query.name) {
    next();
  }
  if (req.query.name === '') {
    next('there is no name');
  }
};

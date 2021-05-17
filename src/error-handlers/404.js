'use strict';
/**
 *
 * @param {object} req http request and it's properties
 * @param {object} res http response send from express when it it gets a request
 */
module.exports = (req, res) => {
  res.status(404).json({
    status: 404,
    message:
      'Oh no! It look like the Behemoth took this page to The Upside Down',
  });
};

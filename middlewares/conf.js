var config = require('../config');

exports.github = function (req, res, next) {
  if (config.GITHUB_OAUTH.clientID === '76a386f9270a8c2934ab') {
    return res.send('call the admin to set github oauth.');
  }
  next();
};

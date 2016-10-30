const faker = require('faker');
const validUrl = require('valid-url');

module.exports.takeScreenshot = (event, context, callback) => {

  const siteUrl = event.url;
  //const timeout = event.stageVariables.screenshotTimeout;

  var response = {
    statusCode: 200,
    body: JSON.stringify({"message": "Url OK " + siteUrl})
  };

  //var reponse = screenshot.take(siteUrl);

  callback(null, response);

};

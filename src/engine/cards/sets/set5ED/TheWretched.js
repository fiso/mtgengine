'use strict';
const Constants = require('../../../Constants');
const TheWretchedBase = require('../setME3/TheWretched');

class TheWretched extends TheWretchedBase {
  constructor (game) {
    super(game, 'The Wretched', 'Fifth Edition', '5ED');
  }
}

module.exports = TheWretched;

'use strict';
const Constants = require('../../../Constants');
const IronStarBase = require('../set8ED/IronStar');

class IronStar extends IronStarBase {
  constructor (game) {
    super(game, 'Iron Star', 'Fifth Edition', '5ED');
  }
}

module.exports = IronStar;

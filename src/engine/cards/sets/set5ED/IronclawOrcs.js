'use strict';
const Constants = require('../../../Constants');
const IronclawOrcsBase = require('../setME2/IronclawOrcs');

class IronclawOrcs extends IronclawOrcsBase {
  constructor (game) {
    super(game, 'Ironclaw Orcs', 'Fifth Edition', '5ED');
  }
}

module.exports = IronclawOrcs;

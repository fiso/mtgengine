'use strict';
const Constants = require('../../../Constants');
const SwordstoPlowsharesBase = require('../setBBD/SwordstoPlowshares');

class SwordstoPlowshares extends SwordstoPlowsharesBase {
  constructor (game) {
    super(game, 'Swords to Plowshares', 'Revised Edition', '3ED');
  }
}

module.exports = SwordstoPlowshares;

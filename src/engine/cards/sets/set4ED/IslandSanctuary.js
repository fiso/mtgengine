'use strict';
const Constants = require('../../../Constants');
const IslandSanctuaryBase = require('../setME4/IslandSanctuary');

class IslandSanctuary extends IslandSanctuaryBase {
  constructor (game) {
    super(game, 'Island Sanctuary', 'Fourth Edition', '4ED');
  }
}

module.exports = IslandSanctuary;

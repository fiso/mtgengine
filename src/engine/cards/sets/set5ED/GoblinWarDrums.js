'use strict';
const Constants = require('../../../Constants');
const GoblinWarDrumsBase = require('../setA25/GoblinWarDrums');

class GoblinWarDrums extends GoblinWarDrumsBase {
  constructor (game) {
    super(game, 'Goblin War Drums', 'Fifth Edition', '5ED');
  }
}

module.exports = GoblinWarDrums;

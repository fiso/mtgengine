'use strict';
const Constants = require('../../../Constants');
const DarkRitualBase = require('../setA25/DarkRitual');

class DarkRitual extends DarkRitualBase {
  constructor (game) {
    super(game, 'Dark Ritual', 'Revised Edition', '3ED');
  }
}

module.exports = DarkRitual;

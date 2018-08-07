'use strict';
const Constants = require('../../../Constants');
const RudeAwakeningBase = require('../setGVL/RudeAwakening');

class RudeAwakening extends RudeAwakeningBase {
  constructor (game) {
    super(game, 'Rude Awakening', 'Fifth Dawn', '5DN');
  }
}

module.exports = RudeAwakening;

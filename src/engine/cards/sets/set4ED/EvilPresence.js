'use strict';
const Constants = require('../../../Constants');
const EvilPresenceBase = require('../setNPH/EvilPresence');

class EvilPresence extends EvilPresenceBase {
  constructor (game) {
    super(game, 'Evil Presence', 'Fourth Edition', '4ED');
  }
}

module.exports = EvilPresence;

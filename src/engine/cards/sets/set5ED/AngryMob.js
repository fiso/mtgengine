'use strict';
const Constants = require('../../../Constants');
const AngryMobBase = require('../setMED/AngryMob');

class AngryMob extends AngryMobBase {
  constructor (game) {
    super(game, 'Angry Mob', 'Fifth Edition', '5ED');
  }
}

module.exports = AngryMob;

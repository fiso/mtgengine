'use strict';
const Constants = require('../../../Constants');
const StoneRainBase = require('../set9ED/StoneRain');

class StoneRain extends StoneRainBase {
  constructor (game) {
    super(game, 'Stone Rain', 'Unlimited Edition', '2ED');
  }
}

module.exports = StoneRain;

'use strict';
const Constants = require('../../../Constants');
const LordofthePitBase = require('../setIMA/LordofthePit');

class LordofthePit extends LordofthePitBase {
  constructor (game) {
    super(game, 'Lord of the Pit', 'Revised Edition', '3ED');
  }
}

module.exports = LordofthePit;

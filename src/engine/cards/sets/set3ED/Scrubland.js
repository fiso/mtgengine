'use strict';
const Constants = require('../../../Constants');
const ScrublandBase = require('../setVMA/Scrubland');

class Scrubland extends ScrublandBase {
  constructor (game) {
    super(game, 'Scrubland', 'Revised Edition', '3ED');
  }
}

module.exports = Scrubland;

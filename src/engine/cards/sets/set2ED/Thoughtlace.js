'use strict';
const Constants = require('../../../Constants');
const ThoughtlaceBase = require('../set4ED/Thoughtlace');

class Thoughtlace extends ThoughtlaceBase {
  constructor (game) {
    super(game, 'Thoughtlace', 'Unlimited Edition', '2ED');
  }
}

module.exports = Thoughtlace;

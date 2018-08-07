'use strict';
const Constants = require('../../../Constants');
const ShatterBase = require('../setRIX/Shatter');

class Shatter extends ShatterBase {
  constructor (game) {
    super(game, 'Shatter', 'Fourth Edition', '4ED');
  }
}

module.exports = Shatter;

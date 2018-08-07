'use strict';
const Constants = require('../../../Constants');
const ThicketBasiliskBase = require('../setMED/ThicketBasilisk');

class ThicketBasilisk extends ThicketBasiliskBase {
  constructor (game) {
    super(game, 'Thicket Basilisk', 'Unlimited Edition', '2ED');
  }
}

module.exports = ThicketBasilisk;

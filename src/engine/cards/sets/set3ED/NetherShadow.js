'use strict';
const Constants = require('../../../Constants');
const NetherShadowBase = require('../setMED/NetherShadow');

class NetherShadow extends NetherShadowBase {
  constructor (game) {
    super(game, 'Nether Shadow', 'Revised Edition', '3ED');
  }
}

module.exports = NetherShadow;

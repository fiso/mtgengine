'use strict';
const Constants = require('../../../Constants');
const WarMammothBase = require('../setME4/WarMammoth');

class WarMammoth extends WarMammothBase {
  constructor (game) {
    super(game, 'War Mammoth', 'Revised Edition', '3ED');
  }
}

module.exports = WarMammoth;

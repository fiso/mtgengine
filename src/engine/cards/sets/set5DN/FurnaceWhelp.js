'use strict';
const Constants = require('../../../Constants');
const FurnaceWhelpBase = require('../setIMA/FurnaceWhelp');

class FurnaceWhelp extends FurnaceWhelpBase {
  constructor (game) {
    super(game, 'Furnace Whelp', 'Fifth Dawn', '5DN');
  }
}

module.exports = FurnaceWhelp;

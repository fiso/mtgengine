"use strict";
const Constants = require ("../../../Constants");
const GiantbaitingBase = require("../setMM3/Giantbaiting");

class Giantbaiting extends GiantbaitingBase {
  constructor (game) {
    super(game, "Giantbaiting", "Shadowmoor", "SHM");
  }
}

module.exports = Giantbaiting;

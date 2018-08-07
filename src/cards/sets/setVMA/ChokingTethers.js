"use strict";
const Constants = require ("../../../Constants");
const ChokingTethersBase = require("../setA25/ChokingTethers");

class ChokingTethers extends ChokingTethersBase {
  constructor (game) {
    super(game, "Choking Tethers", "Vintage Masters", "VMA");
  }
}

module.exports = ChokingTethers;

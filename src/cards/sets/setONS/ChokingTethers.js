"use strict";
const Constants = require ("../../../Constants");
const ChokingTethersBase = require("../setA25/ChokingTethers");

class ChokingTethers extends ChokingTethersBase {
  constructor (game) {
    super(game, "Choking Tethers", "Onslaught", "ONS");
  }
}

module.exports = ChokingTethers;

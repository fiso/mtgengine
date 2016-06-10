"use strict";
const Constants = require ("../../../Constants");
const StormbloodBerserkerBase = require("../setM12/StormbloodBerserker");

class StormbloodBerserker extends StormbloodBerserkerBase {
  constructor (game) {
    super(game, "Stormblood Berserker", "Magic Game Day", "pMGD");
  }
}

module.exports = StormbloodBerserker;

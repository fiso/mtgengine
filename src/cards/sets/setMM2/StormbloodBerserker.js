"use strict";
const Constants = require ("../../../Constants");
const StormbloodBerserkerBase = require("../setE01/StormbloodBerserker");

class StormbloodBerserker extends StormbloodBerserkerBase {
  constructor (game) {
    super(game, "Stormblood Berserker", "Modern Masters 2015", "MM2");
  }
}

module.exports = StormbloodBerserker;

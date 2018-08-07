"use strict";
const Constants = require ("../../../Constants");
const StormbloodBerserkerBase = require("../setE01/StormbloodBerserker");

class StormbloodBerserker extends StormbloodBerserkerBase {
  constructor (game) {
    super(game, "Stormblood Berserker", "Magic 2012 Promos", "PM12");
  }
}

module.exports = StormbloodBerserker;

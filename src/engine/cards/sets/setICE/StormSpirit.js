"use strict";
const Constants = require ("../../../Constants");
const StormSpiritBase = require("../setME2/StormSpirit");

class StormSpirit extends StormSpiritBase {
  constructor (game) {
    super(game, "Storm Spirit", "Ice Age", "ICE");
  }
}

module.exports = StormSpirit;

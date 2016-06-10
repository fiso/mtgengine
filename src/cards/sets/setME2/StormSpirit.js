"use strict";
const Constants = require ("../../../Constants");
const StormSpiritBase = require("../setICE/StormSpirit");

class StormSpirit extends StormSpiritBase {
  constructor (game) {
    super(game, "Storm Spirit", "Masters Edition II", "ME2");
  }
}

module.exports = StormSpirit;

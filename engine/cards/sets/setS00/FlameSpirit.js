"use strict";
const Constants = require ("../../../Constants");
const FlameSpiritBase = require("../set6ED/FlameSpirit");

class FlameSpirit extends FlameSpiritBase {
  constructor(game) {
    super(game, "Flame Spirit", "Starter 2000", "S00");
  }
}

module.exports = FlameSpirit;

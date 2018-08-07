"use strict";
const Constants = require ("../../../Constants");
const FlameSpiritBase = require("../setME2/FlameSpirit");

class FlameSpirit extends FlameSpiritBase {
  constructor (game) {
    super(game, "Flame Spirit", "Starter 2000", "S00");
  }
}

module.exports = FlameSpirit;

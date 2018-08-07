"use strict";
const Constants = require ("../../../Constants");
const FlameSpiritBase = require("../setME2/FlameSpirit");

class FlameSpirit extends FlameSpiritBase {
  constructor (game) {
    super(game, "Flame Spirit", "Ice Age", "ICE");
  }
}

module.exports = FlameSpirit;

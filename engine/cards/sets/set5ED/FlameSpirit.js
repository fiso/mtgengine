"use strict";
const Constants = require ("../../../Constants");
const FlameSpiritBase = require("../set6ED/FlameSpirit");

class FlameSpirit extends FlameSpiritBase {
  constructor(game) {
    super(game, "Flame Spirit", "Fifth Edition", "5ED");
  }
}

module.exports = FlameSpirit;

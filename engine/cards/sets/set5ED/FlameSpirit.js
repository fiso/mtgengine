"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlameSpiritBase = require("../set6ED/FlameSpirit.js");

class FlameSpirit extends FlameSpiritBase {
  constructor(game) {
    super(game, "Flame Spirit", "Fifth Edition", "5ED");
  }
}

module.exports = FlameSpirit;

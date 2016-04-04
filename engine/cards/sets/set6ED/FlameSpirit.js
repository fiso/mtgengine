"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlameSpirit extends Card {
  constructor(game) {
    super(game, "Flame Spirit", "Classic Sixth Edition", "6ED");
  }
}

module.exports = FlameSpirit;

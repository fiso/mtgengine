"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BladeSliver extends Card {
  constructor(game) {
    super(game, "Blade Sliver", "Legions", "LGN");
  }
}

module.exports = BladeSliver;

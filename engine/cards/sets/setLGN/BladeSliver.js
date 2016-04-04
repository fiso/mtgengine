"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BladeSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Blade Sliver", "Legions", "LGN");
  }
}

module.exports = BladeSliver;

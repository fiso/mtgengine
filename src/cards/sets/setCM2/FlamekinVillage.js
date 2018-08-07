"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlamekinVillage extends UnimplementedCard {
  constructor (game) {
    super(game, "Flamekin Village", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = FlamekinVillage;

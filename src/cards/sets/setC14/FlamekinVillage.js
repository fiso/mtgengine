"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlamekinVillage extends UnimplementedCard {
  constructor(game) {
    super(game, "Flamekin Village", "Commander 2014", "C14");
  }
}

module.exports = FlamekinVillage;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CraterElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Crater Elemental", "Dragons of Tarkir", "DTK");
  }
}

module.exports = CraterElemental;

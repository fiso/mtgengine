"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShorecrasherElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Shorecrasher Elemental", "Dragons of Tarkir", "DTK");
  }
}

module.exports = ShorecrasherElemental;

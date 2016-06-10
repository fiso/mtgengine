"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RootElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Root Elemental", "Scourge", "SCG");
  }
}

module.exports = RootElemental;

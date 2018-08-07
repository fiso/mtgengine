"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FungusElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Fungus Elemental", "Weatherlight", "WTH");
  }
}

module.exports = FungusElemental;

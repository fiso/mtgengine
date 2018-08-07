"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeaLegs extends UnimplementedCard {
  constructor (game) {
    super(game, "Sea Legs", "Rivals of Ixalan", "RIX");
  }
}

module.exports = SeaLegs;

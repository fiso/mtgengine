"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AirElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Air Elemental", "Battle Royale Box Set", "BRB");
  }
}

module.exports = AirElemental;

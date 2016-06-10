"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VecTownships extends UnimplementedCard {
  constructor (game) {
    super(game, "Vec Townships", "Battle Royale Box Set", "BRB");
  }
}

module.exports = VecTownships;

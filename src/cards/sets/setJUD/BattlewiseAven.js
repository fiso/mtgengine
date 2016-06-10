"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattlewiseAven extends UnimplementedCard {
  constructor (game) {
    super(game, "Battlewise Aven", "Judgment", "JUD");
  }
}

module.exports = BattlewiseAven;

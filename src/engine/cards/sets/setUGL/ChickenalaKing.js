"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChickenalaKing extends UnimplementedCard {
  constructor (game) {
    super(game, "Chicken à la King", "Unglued", "UGL");
  }
}

module.exports = ChickenalaKing;

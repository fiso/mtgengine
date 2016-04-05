"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Knighthood extends UnimplementedCard {
  constructor(game) {
    super(game, "Knighthood", "Seventh Edition", "7ED");
  }
}

module.exports = Knighthood;

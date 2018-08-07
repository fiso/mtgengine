"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rowen extends UnimplementedCard {
  constructor (game) {
    super(game, "Rowen", "Seventh Edition", "7ED");
  }
}

module.exports = Rowen;

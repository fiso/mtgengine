"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AcidicSlime extends UnimplementedCard {
  constructor (game) {
    super(game, "Acidic Slime", "Commander 2013 Edition", "C13");
  }
}

module.exports = AcidicSlime;

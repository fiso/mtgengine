"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalaGedScorpion extends UnimplementedCard {
  constructor(game) {
    super(game, "Bala Ged Scorpion", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = BalaGedScorpion;

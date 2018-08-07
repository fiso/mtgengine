"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FinalFortune extends UnimplementedCard {
  constructor (game) {
    super(game, "Final Fortune", "Seventh Edition", "7ED");
  }
}

module.exports = FinalFortune;

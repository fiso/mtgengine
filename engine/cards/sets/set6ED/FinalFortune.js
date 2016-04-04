"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FinalFortune extends UnimplementedCard {
  constructor(game) {
    super(game, "Final Fortune", "Classic Sixth Edition", "6ED");
  }
}

module.exports = FinalFortune;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilverbackApe extends UnimplementedCard {
  constructor(game) {
    super(game, "Silverback Ape", "Eighth Edition", "8ED");
  }
}

module.exports = SilverbackApe;

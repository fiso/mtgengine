"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AmrouKithkin extends UnimplementedCard {
  constructor(game) {
    super(game, "Amrou Kithkin", "Fourth Edition", "4ED");
  }
}

module.exports = AmrouKithkin;

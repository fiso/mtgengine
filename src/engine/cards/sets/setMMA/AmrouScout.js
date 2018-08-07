"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AmrouScout extends UnimplementedCard {
  constructor (game) {
    super(game, "Amrou Scout", "Modern Masters", "MMA");
  }
}

module.exports = AmrouScout;

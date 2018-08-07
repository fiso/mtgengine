"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfernoFist extends UnimplementedCard {
  constructor (game) {
    super(game, "Inferno Fist", "Magic 2015", "M15");
  }
}

module.exports = InfernoFist;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GuardianSeraph extends UnimplementedCard {
  constructor (game) {
    super(game, "Guardian Seraph", "Magic 2010", "M10");
  }
}

module.exports = GuardianSeraph;

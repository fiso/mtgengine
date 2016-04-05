"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoralMerfolk extends UnimplementedCard {
  constructor(game) {
    super(game, "Coral Merfolk", "Magic 2010", "M10");
  }
}

module.exports = CoralMerfolk;

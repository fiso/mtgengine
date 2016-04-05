"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SowingSalt extends UnimplementedCard {
  constructor(game) {
    super(game, "Sowing Salt", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = SowingSalt;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Takara extends UnimplementedCard {
  constructor (game) {
    super(game, "Takara", "Vanguard", "VAN");
  }
}

module.exports = Takara;

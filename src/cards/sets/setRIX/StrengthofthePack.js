"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrengthofthePack extends UnimplementedCard {
  constructor (game) {
    super(game, "Strength of the Pack", "Rivals of Ixalan", "RIX");
  }
}

module.exports = StrengthofthePack;

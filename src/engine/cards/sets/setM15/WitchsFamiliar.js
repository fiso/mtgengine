"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WitchsFamiliar extends UnimplementedCard {
  constructor (game) {
    super(game, "Witch's Familiar", "Magic 2015", "M15");
  }
}

module.exports = WitchsFamiliar;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WitchsFamiliar extends UnimplementedCard {
  constructor (game) {
    super(game, "Witch's Familiar", "Magic 2015 Core Set", "M15");
  }
}

module.exports = WitchsFamiliar;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulofRavnica extends UnimplementedCard {
  constructor (game) {
    super(game, "Soul of Ravnica", "Magic 2015", "M15");
  }
}

module.exports = SoulofRavnica;

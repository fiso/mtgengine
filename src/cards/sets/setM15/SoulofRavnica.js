"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulofRavnica extends UnimplementedCard {
  constructor (game) {
    super(game, "Soul of Ravnica", "Magic 2015 Core Set", "M15");
  }
}

module.exports = SoulofRavnica;

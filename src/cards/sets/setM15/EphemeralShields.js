"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EphemeralShields extends UnimplementedCard {
  constructor (game) {
    super(game, "Ephemeral Shields", "Magic 2015 Core Set", "M15");
  }
}

module.exports = EphemeralShields;

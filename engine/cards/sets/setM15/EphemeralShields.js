"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EphemeralShields extends Card {
  constructor(game) {
    super(game, "Ephemeral Shields", "Magic 2015 Core Set", "M15");
  }
}

module.exports = EphemeralShields;

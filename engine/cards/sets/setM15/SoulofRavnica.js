"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulofRavnica extends Card {
  constructor(game) {
    super(game, "Soul of Ravnica", "Magic 2015 Core Set", "M15");
  }
}

module.exports = SoulofRavnica;

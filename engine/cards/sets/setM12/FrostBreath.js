"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FrostBreath extends Card {
  constructor(game) {
    super(game, "Frost Breath", "Magic 2012", "M12");
  }
}

module.exports = FrostBreath;

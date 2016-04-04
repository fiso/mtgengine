"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KiteShield extends Card {
  constructor(game) {
    super(game, "Kite Shield", "Magic 2012", "M12");
  }
}

module.exports = KiteShield;

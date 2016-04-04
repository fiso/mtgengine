"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpiritMantle extends Card {
  constructor(game) {
    super(game, "Spirit Mantle", "Magic 2012", "M12");
  }
}

module.exports = SpiritMantle;

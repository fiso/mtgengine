"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlindCreeper extends Card {
  constructor(game) {
    super(game, "Blind Creeper", "Fifth Dawn", "5DN");
  }
}

module.exports = BlindCreeper;

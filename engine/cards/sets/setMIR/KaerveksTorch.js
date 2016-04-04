"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KaerveksTorch extends Card {
  constructor(game) {
    super(game, "Kaervek's Torch", "Mirage", "MIR");
  }
}

module.exports = KaerveksTorch;

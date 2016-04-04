"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RockBasilisk extends Card {
  constructor(game) {
    super(game, "Rock Basilisk", "Mirage", "MIR");
  }
}

module.exports = RockBasilisk;

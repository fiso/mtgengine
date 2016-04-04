"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MimingSlime extends Card {
  constructor(game) {
    super(game, "Miming Slime", "Gatecrash", "GTC");
  }
}

module.exports = MimingSlime;

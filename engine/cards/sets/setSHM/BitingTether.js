"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BitingTether extends Card {
  constructor(game) {
    super(game, "Biting Tether", "Shadowmoor", "SHM");
  }
}

module.exports = BitingTether;

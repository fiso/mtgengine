"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlowflyInfestation extends Card {
  constructor(game) {
    super(game, "Blowfly Infestation", "Shadowmoor", "SHM");
  }
}

module.exports = BlowflyInfestation;

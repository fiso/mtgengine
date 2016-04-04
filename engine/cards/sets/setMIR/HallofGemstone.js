"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HallofGemstone extends Card {
  constructor(game) {
    super(game, "Hall of Gemstone", "Mirage", "MIR");
  }
}

module.exports = HallofGemstone;

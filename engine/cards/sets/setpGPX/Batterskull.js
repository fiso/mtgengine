"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Batterskull extends Card {
  constructor(game) {
    super(game, "Batterskull", "Grand Prix", "pGPX");
  }
}

module.exports = Batterskull;

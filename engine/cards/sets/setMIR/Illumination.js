"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Illumination extends Card {
  constructor(game) {
    super(game, "Illumination", "Mirage", "MIR");
  }
}

module.exports = Illumination;

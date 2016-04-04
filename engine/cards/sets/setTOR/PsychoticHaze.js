"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PsychoticHaze extends Card {
  constructor(game) {
    super(game, "Psychotic Haze", "Torment", "TOR");
  }
}

module.exports = PsychoticHaze;

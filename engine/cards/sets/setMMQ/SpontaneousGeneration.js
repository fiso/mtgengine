"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpontaneousGeneration extends Card {
  constructor(game) {
    super(game, "Spontaneous Generation", "Mercadian Masques", "MMQ");
  }
}

module.exports = SpontaneousGeneration;

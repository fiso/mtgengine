"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Metamorphose extends Card {
  constructor(game) {
    super(game, "Metamorphose", "Scourge", "SCG");
  }
}

module.exports = Metamorphose;

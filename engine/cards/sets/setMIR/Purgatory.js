"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Purgatory extends Card {
  constructor(game) {
    super(game, "Purgatory", "Mirage", "MIR");
  }
}

module.exports = Purgatory;

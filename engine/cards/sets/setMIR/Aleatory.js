"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Aleatory extends Card {
  constructor(game) {
    super(game, "Aleatory", "Mirage", "MIR");
  }
}

module.exports = Aleatory;

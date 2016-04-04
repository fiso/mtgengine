"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Soar extends Card {
  constructor(game) {
    super(game, "Soar", "Mirage", "MIR");
  }
}

module.exports = Soar;

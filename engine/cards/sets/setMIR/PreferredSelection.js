"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PreferredSelection extends Card {
  constructor(game) {
    super(game, "Preferred Selection", "Mirage", "MIR");
  }
}

module.exports = PreferredSelection;

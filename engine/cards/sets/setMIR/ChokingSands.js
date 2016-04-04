"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChokingSands extends Card {
  constructor(game) {
    super(game, "Choking Sands", "Mirage", "MIR");
  }
}

module.exports = ChokingSands;

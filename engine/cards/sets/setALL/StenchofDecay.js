"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StenchofDecay extends Card {
  constructor(game) {
    super(game, "Stench of Decay", "Alliances", "ALL");
  }
}

module.exports = StenchofDecay;

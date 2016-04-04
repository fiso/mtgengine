"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DreamstoneHedron extends Card {
  constructor(game) {
    super(game, "Dreamstone Hedron", "Archenemy", "ARC");
  }
}

module.exports = DreamstoneHedron;

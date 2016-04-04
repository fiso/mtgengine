"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SlipperyKarst extends Card {
  constructor(game) {
    super(game, "Slippery Karst", "Anthologies", "ATH");
  }
}

module.exports = SlipperyKarst;

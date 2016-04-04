"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AlphaStatus extends Card {
  constructor(game) {
    super(game, "Alpha Status", "Scourge", "SCG");
  }
}

module.exports = AlphaStatus;

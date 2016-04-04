"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AllinGoodTime extends Card {
  constructor(game) {
    super(game, "All in Good Time", "Archenemy", "ARC");
  }
}

module.exports = AllinGoodTime;

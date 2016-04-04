"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EventheOdds extends Card {
  constructor(game) {
    super(game, "Even the Odds", "Future Sight", "FUT");
  }
}

module.exports = EventheOdds;

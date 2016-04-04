"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeartwoodStoryteller extends Card {
  constructor(game) {
    super(game, "Heartwood Storyteller", "Future Sight", "FUT");
  }
}

module.exports = HeartwoodStoryteller;

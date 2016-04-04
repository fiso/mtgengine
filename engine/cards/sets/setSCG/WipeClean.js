"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WipeClean extends Card {
  constructor(game) {
    super(game, "Wipe Clean", "Scourge", "SCG");
  }
}

module.exports = WipeClean;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SilentSkimmer extends Card {
  constructor(game) {
    super(game, "Silent Skimmer", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SilentSkimmer;

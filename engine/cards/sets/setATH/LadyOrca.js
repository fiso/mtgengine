"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LadyOrca extends Card {
  constructor(game) {
    super(game, "Lady Orca", "Anthologies", "ATH");
  }
}

module.exports = LadyOrca;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SmolderingCrater extends Card {
  constructor(game) {
    super(game, "Smoldering Crater", "Anthologies", "ATH");
  }
}

module.exports = SmolderingCrater;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AdverseConditions extends Card {
  constructor(game) {
    super(game, "Adverse Conditions", "Battle for Zendikar", "BFZ");
  }
}

module.exports = AdverseConditions;

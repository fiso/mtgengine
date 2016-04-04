"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodflowConnoisseur extends Card {
  constructor(game) {
    super(game, "Bloodflow Connoisseur", "Avacyn Restored", "AVR");
  }
}

module.exports = BloodflowConnoisseur;

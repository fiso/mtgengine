"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SuicidalCharge extends Card {
  constructor(game) {
    super(game, "Suicidal Charge", "Conflux", "CON");
  }
}

module.exports = SuicidalCharge;

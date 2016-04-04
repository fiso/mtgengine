"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EnergyField extends Card {
  constructor(game) {
    super(game, "Energy Field", "Urza's Saga", "USG");
  }
}

module.exports = EnergyField;

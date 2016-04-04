"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodVassal extends Card {
  constructor(game) {
    super(game, "Blood Vassal", "Urza's Saga", "USG");
  }
}

module.exports = BloodVassal;

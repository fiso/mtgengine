"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CripplingFatigue extends Card {
  constructor(game) {
    super(game, "Crippling Fatigue", "Torment", "TOR");
  }
}

module.exports = CripplingFatigue;

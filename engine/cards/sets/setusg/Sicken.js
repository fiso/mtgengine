"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sicken extends Card {
  constructor(game) {
    super(game, "Sicken", "Urza's Saga", "USG");
  }
}

module.exports = Sicken;

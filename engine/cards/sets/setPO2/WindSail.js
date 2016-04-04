"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WindSail extends Card {
  constructor(game) {
    super(game, "Wind Sail", "Portal Second Age", "PO2");
  }
}

module.exports = WindSail;

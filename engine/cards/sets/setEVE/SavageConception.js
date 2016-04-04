"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SavageConception extends Card {
  constructor(game) {
    super(game, "Savage Conception", "Eventide", "EVE");
  }
}

module.exports = SavageConception;

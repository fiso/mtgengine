"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FieryTemper extends Card {
  constructor(game) {
    super(game, "Fiery Temper", "Gateway", "pGTW");
  }
}

module.exports = FieryTemper;

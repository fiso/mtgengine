"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AppetiteforBrains extends Card {
  constructor(game) {
    super(game, "Appetite for Brains", "Avacyn Restored", "AVR");
  }
}

module.exports = AppetiteforBrains;

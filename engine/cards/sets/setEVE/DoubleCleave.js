"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DoubleCleave extends Card {
  constructor(game) {
    super(game, "Double Cleave", "Eventide", "EVE");
  }
}

module.exports = DoubleCleave;

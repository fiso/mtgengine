"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RiteofRuin extends Card {
  constructor(game) {
    super(game, "Rite of Ruin", "Avacyn Restored", "AVR");
  }
}

module.exports = RiteofRuin;

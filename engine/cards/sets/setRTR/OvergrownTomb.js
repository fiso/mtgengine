"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OvergrownTombBase = require("../setRAV/OvergrownTomb.js");

class OvergrownTomb extends OvergrownTombBase {
  constructor(game) {
    super(game, "Overgrown Tomb", "Return to Ravnica", "RTR");
  }
}

module.exports = OvergrownTomb;

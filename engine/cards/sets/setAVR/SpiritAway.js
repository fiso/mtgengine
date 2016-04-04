"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpiritAway extends Card {
  constructor(game) {
    super(game, "Spirit Away", "Avacyn Restored", "AVR");
  }
}

module.exports = SpiritAway;

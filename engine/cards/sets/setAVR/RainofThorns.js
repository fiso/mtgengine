"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RainofThorns extends Card {
  constructor(game) {
    super(game, "Rain of Thorns", "Avacyn Restored", "AVR");
  }
}

module.exports = RainofThorns;

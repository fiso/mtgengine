"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LightningMauler extends Card {
  constructor(game) {
    super(game, "Lightning Mauler", "Avacyn Restored", "AVR");
  }
}

module.exports = LightningMauler;

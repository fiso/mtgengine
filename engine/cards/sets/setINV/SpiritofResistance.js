"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpiritofResistance extends Card {
  constructor(game) {
    super(game, "Spirit of Resistance", "Invasion", "INV");
  }
}

module.exports = SpiritofResistance;

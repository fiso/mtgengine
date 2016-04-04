"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpiritWeaver extends Card {
  constructor(game) {
    super(game, "Spirit Weaver", "Invasion", "INV");
  }
}

module.exports = SpiritWeaver;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpiritualSanctuary extends Card {
  constructor(game) {
    super(game, "Spiritual Sanctuary", "Legends", "LEG");
  }
}

module.exports = SpiritualSanctuary;

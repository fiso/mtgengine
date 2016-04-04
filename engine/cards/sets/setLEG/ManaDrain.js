"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ManaDrain extends Card {
  constructor(game) {
    super(game, "Mana Drain", "Legends", "LEG");
  }
}

module.exports = ManaDrain;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LavastepRaider extends Card {
  constructor(game) {
    super(game, "Lavastep Raider", "Battle for Zendikar", "BFZ");
  }
}

module.exports = LavastepRaider;

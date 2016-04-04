"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HoardersGreed extends Card {
  constructor(game) {
    super(game, "Hoarder's Greed", "Lorwyn", "LRW");
  }
}

module.exports = HoardersGreed;

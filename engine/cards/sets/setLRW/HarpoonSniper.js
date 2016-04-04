"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HarpoonSniper extends Card {
  constructor(game) {
    super(game, "Harpoon Sniper", "Lorwyn", "LRW");
  }
}

module.exports = HarpoonSniper;

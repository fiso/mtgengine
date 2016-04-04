"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NecromancersStockpile extends Card {
  constructor(game) {
    super(game, "Necromancer's Stockpile", "Magic 2015 Core Set", "M15");
  }
}

module.exports = NecromancersStockpile;

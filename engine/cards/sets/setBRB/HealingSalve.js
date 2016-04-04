"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HealingSalve extends Card {
  constructor(game) {
    super(game, "Healing Salve", "Battle Royale Box Set", "BRB");
  }
}

module.exports = HealingSalve;

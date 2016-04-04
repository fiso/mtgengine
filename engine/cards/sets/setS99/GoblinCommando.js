"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinCommando extends Card {
  constructor(game) {
    super(game, "Goblin Commando", "Starter 1999", "S99");
  }
}

module.exports = GoblinCommando;

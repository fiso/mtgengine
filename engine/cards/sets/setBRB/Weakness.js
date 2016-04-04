"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Weakness extends Card {
  constructor(game) {
    super(game, "Weakness", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Weakness;

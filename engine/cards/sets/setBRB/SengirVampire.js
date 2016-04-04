"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SengirVampire extends Card {
  constructor(game) {
    super(game, "Sengir Vampire", "Battle Royale Box Set", "BRB");
  }
}

module.exports = SengirVampire;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SummoningTrap extends Card {
  constructor(game) {
    super(game, "Summoning Trap", "Zendikar", "ZEN");
  }
}

module.exports = SummoningTrap;

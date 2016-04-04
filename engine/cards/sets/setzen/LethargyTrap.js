"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LethargyTrap extends Card {
  constructor(game) {
    super(game, "Lethargy Trap", "Zendikar", "ZEN");
  }
}

module.exports = LethargyTrap;

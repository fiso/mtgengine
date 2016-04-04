"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LavaballTrap extends Card {
  constructor(game) {
    super(game, "Lavaball Trap", "Zendikar", "ZEN");
  }
}

module.exports = LavaballTrap;

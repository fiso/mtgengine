"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PowerstoneMinefield extends Card {
  constructor(game) {
    super(game, "Powerstone Minefield", "Apocalypse", "APC");
  }
}

module.exports = PowerstoneMinefield;

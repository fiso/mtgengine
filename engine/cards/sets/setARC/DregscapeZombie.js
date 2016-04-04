"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DregscapeZombie extends Card {
  constructor(game) {
    super(game, "Dregscape Zombie", "Archenemy", "ARC");
  }
}

module.exports = DregscapeZombie;

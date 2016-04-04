"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CoffinPurge extends Card {
  constructor(game) {
    super(game, "Coffin Purge", "Odyssey", "ODY");
  }
}

module.exports = CoffinPurge;

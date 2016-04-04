"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AstralSteel extends Card {
  constructor(game) {
    super(game, "Astral Steel", "Scourge", "SCG");
  }
}

module.exports = AstralSteel;

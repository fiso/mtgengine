"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LethalVapors extends Card {
  constructor(game) {
    super(game, "Lethal Vapors", "Scourge", "SCG");
  }
}

module.exports = LethalVapors;

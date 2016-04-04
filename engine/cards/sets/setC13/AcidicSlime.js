"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AcidicSlime extends Card {
  constructor(game) {
    super(game, "Acidic Slime", "Commander 2013 Edition", "C13");
  }
}

module.exports = AcidicSlime;

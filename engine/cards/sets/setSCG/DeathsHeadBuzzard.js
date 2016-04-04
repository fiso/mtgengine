"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeathsHeadBuzzard extends Card {
  constructor(game) {
    super(game, "Death's-Head Buzzard", "Scourge", "SCG");
  }
}

module.exports = DeathsHeadBuzzard;

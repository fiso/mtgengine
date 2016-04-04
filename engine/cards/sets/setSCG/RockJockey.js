"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RockJockey extends Card {
  constructor(game) {
    super(game, "Rock Jockey", "Scourge", "SCG");
  }
}

module.exports = RockJockey;

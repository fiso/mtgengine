"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkulkingKnight extends Card {
  constructor(game) {
    super(game, "Skulking Knight", "Time Spiral", "TSP");
  }
}

module.exports = SkulkingKnight;

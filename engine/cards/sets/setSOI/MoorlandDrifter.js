"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoorlandDrifter extends Card {
  constructor(game) {
    super(game, "Moorland Drifter", "Shadows over Innistrad", "SOI");
  }
}

module.exports = MoorlandDrifter;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpireSerpent extends Card {
  constructor(game) {
    super(game, "Spire Serpent", "Mirrodin Besieged", "MBS");
  }
}

module.exports = SpireSerpent;

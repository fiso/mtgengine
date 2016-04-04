"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SteelcladSerpent extends Card {
  constructor(game) {
    super(game, "Steelclad Serpent", "Shards of Alara", "ALA");
  }
}

module.exports = SteelcladSerpent;

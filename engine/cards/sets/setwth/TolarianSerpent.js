"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TolarianSerpent extends Card {
  constructor(game) {
    super(game, "Tolarian Serpent", "Weatherlight", "WTH");
  }
}

module.exports = TolarianSerpent;

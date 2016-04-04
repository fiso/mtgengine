"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BogSerpent extends Card {
  constructor(game) {
    super(game, "Bog Serpent", "Planar Chaos", "PLC");
  }
}

module.exports = BogSerpent;

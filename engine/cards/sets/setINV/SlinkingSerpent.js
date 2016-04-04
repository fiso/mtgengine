"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SlinkingSerpent extends Card {
  constructor(game) {
    super(game, "Slinking Serpent", "Invasion", "INV");
  }
}

module.exports = SlinkingSerpent;

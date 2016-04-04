"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpinyStarfish extends Card {
  constructor(game) {
    super(game, "Spiny Starfish", "Alliances", "ALL");
  }
}

module.exports = SpinyStarfish;

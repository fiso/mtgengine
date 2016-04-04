"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EncirclingFissure extends Card {
  constructor(game) {
    super(game, "Encircling Fissure", "Battle for Zendikar", "BFZ");
  }
}

module.exports = EncirclingFissure;

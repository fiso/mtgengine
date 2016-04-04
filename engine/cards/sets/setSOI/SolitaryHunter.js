"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SolitaryHunter extends Card {
  constructor(game) {
    super(game, "Solitary Hunter", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SolitaryHunter;

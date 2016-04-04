"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KnightofStromgald extends Card {
  constructor(game) {
    super(game, "Knight of Stromgald", "Anthologies", "ATH");
  }
}

module.exports = KnightofStromgald;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BraidwoodSextant extends Card {
  constructor(game) {
    super(game, "Braidwood Sextant", "Urza's Destiny", "UDS");
  }
}

module.exports = BraidwoodSextant;

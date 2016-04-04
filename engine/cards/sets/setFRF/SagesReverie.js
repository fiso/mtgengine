"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SagesReverie extends Card {
  constructor(game) {
    super(game, "Sage's Reverie", "Fate Reforged", "FRF");
  }
}

module.exports = SagesReverie;

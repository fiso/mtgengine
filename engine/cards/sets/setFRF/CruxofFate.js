"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CruxofFate extends Card {
  constructor(game) {
    super(game, "Crux of Fate", "Fate Reforged", "FRF");
  }
}

module.exports = CruxofFate;

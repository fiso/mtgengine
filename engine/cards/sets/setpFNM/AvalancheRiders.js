"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvalancheRiders extends Card {
  constructor(game) {
    super(game, "Avalanche Riders", "Friday Night Magic", "pFNM");
  }
}

module.exports = AvalancheRiders;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarduScout extends Card {
  constructor(game) {
    super(game, "Mardu Scout", "Fate Reforged", "FRF");
  }
}

module.exports = MarduScout;

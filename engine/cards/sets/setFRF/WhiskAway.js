"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WhiskAway extends Card {
  constructor(game) {
    super(game, "Whisk Away", "Fate Reforged", "FRF");
  }
}

module.exports = WhiskAway;

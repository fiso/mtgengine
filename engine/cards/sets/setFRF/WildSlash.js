"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildSlash extends Card {
  constructor(game) {
    super(game, "Wild Slash", "Fate Reforged", "FRF");
  }
}

module.exports = WildSlash;

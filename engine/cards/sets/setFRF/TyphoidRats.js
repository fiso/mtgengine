"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TyphoidRats extends Card {
  constructor(game) {
    super(game, "Typhoid Rats", "Fate Reforged", "FRF");
  }
}

module.exports = TyphoidRats;

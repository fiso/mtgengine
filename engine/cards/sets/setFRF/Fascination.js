"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Fascination extends Card {
  constructor(game) {
    super(game, "Fascination", "Fate Reforged", "FRF");
  }
}

module.exports = Fascination;

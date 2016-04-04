"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OldFogey extends Card {
  constructor(game) {
    super(game, "Old Fogey", "Unhinged", "UNH");
  }
}

module.exports = OldFogey;

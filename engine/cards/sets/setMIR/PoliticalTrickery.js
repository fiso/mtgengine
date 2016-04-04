"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PoliticalTrickery extends Card {
  constructor(game) {
    super(game, "Political Trickery", "Mirage", "MIR");
  }
}

module.exports = PoliticalTrickery;

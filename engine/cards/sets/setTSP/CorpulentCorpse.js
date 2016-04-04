"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CorpulentCorpse extends Card {
  constructor(game) {
    super(game, "Corpulent Corpse", "Time Spiral", "TSP");
  }
}

module.exports = CorpulentCorpse;

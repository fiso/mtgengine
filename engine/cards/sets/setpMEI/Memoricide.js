"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Memoricide extends Card {
  constructor(game) {
    super(game, "Memoricide", "Media Inserts", "pMEI");
  }
}

module.exports = Memoricide;

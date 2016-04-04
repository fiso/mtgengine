"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChaliceofDeath extends Card {
  constructor(game) {
    super(game, "Chalice of Death", "Dark Ascension", "DKA");
  }
}

module.exports = ChaliceofDeath;

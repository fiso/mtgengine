"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeathSpark extends Card {
  constructor(game) {
    super(game, "Death Spark", "Alliances", "ALL");
  }
}

module.exports = DeathSpark;

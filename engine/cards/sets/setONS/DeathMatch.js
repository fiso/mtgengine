"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeathMatch extends Card {
  constructor(game) {
    super(game, "Death Match", "Onslaught", "ONS");
  }
}

module.exports = DeathMatch;

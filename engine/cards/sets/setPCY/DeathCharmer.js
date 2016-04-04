"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeathCharmer extends Card {
  constructor(game) {
    super(game, "Death Charmer", "Prophecy", "PCY");
  }
}

module.exports = DeathCharmer;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RhysticCave extends Card {
  constructor(game) {
    super(game, "Rhystic Cave", "Prophecy", "PCY");
  }
}

module.exports = RhysticCave;

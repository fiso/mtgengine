"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RhysticShield extends Card {
  constructor(game) {
    super(game, "Rhystic Shield", "Prophecy", "PCY");
  }
}

module.exports = RhysticShield;

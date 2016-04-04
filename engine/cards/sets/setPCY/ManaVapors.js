"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ManaVapors extends Card {
  constructor(game) {
    super(game, "Mana Vapors", "Prophecy", "PCY");
  }
}

module.exports = ManaVapors;

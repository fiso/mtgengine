"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ManaChains extends Card {
  constructor(game) {
    super(game, "Mana Chains", "Weatherlight", "WTH");
  }
}

module.exports = ManaChains;

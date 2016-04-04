"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TrueBeliever extends Card {
  constructor(game) {
    super(game, "True Believer", "Onslaught", "ONS");
  }
}

module.exports = TrueBeliever;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EvolvingWilds extends Card {
  constructor(game) {
    super(game, "Evolving Wilds", "Battle for Zendikar", "BFZ");
  }
}

module.exports = EvolvingWilds;

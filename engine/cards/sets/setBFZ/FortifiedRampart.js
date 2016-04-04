"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FortifiedRampart extends Card {
  constructor(game) {
    super(game, "Fortified Rampart", "Battle for Zendikar", "BFZ");
  }
}

module.exports = FortifiedRampart;

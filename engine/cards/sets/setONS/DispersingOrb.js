"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DispersingOrb extends Card {
  constructor(game) {
    super(game, "Dispersing Orb", "Onslaught", "ONS");
  }
}

module.exports = DispersingOrb;

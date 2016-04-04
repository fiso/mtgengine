"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThopterFoundry extends Card {
  constructor(game) {
    super(game, "Thopter Foundry", "Alara Reborn", "ARB");
  }
}

module.exports = ThopterFoundry;

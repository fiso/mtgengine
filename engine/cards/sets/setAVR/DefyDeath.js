"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DefyDeath extends Card {
  constructor(game) {
    super(game, "Defy Death", "Avacyn Restored", "AVR");
  }
}

module.exports = DefyDeath;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArcaneMelee extends Card {
  constructor(game) {
    super(game, "Arcane Melee", "Avacyn Restored", "AVR");
  }
}

module.exports = ArcaneMelee;

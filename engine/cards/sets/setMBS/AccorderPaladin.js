"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AccorderPaladin extends Card {
  constructor(game) {
    super(game, "Accorder Paladin", "Mirrodin Besieged", "MBS");
  }
}

module.exports = AccorderPaladin;

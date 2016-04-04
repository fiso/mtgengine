"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ManaforceMace extends Card {
  constructor(game) {
    super(game, "Manaforce Mace", "Conflux", "CON");
  }
}

module.exports = ManaforceMace;

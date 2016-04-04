"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoltenFrame extends Card {
  constructor(game) {
    super(game, "Molten Frame", "Conflux", "CON");
  }
}

module.exports = MoltenFrame;

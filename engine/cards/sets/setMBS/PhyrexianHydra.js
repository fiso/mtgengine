"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianHydra extends Card {
  constructor(game) {
    super(game, "Phyrexian Hydra", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PhyrexianHydra;

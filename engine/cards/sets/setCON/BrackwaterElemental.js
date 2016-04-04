"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrackwaterElemental extends Card {
  constructor(game) {
    super(game, "Brackwater Elemental", "Conflux", "CON");
  }
}

module.exports = BrackwaterElemental;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CraterElemental extends Card {
  constructor(game) {
    super(game, "Crater Elemental", "Dragons of Tarkir", "DTK");
  }
}

module.exports = CraterElemental;

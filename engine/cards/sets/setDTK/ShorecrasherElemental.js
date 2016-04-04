"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShorecrasherElemental extends Card {
  constructor(game) {
    super(game, "Shorecrasher Elemental", "Dragons of Tarkir", "DTK");
  }
}

module.exports = ShorecrasherElemental;

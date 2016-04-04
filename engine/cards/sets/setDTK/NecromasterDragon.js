"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NecromasterDragon extends Card {
  constructor(game) {
    super(game, "Necromaster Dragon", "Dragons of Tarkir", "DTK");
  }
}

module.exports = NecromasterDragon;

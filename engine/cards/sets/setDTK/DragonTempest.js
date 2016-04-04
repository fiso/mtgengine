"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DragonTempest extends Card {
  constructor(game) {
    super(game, "Dragon Tempest", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DragonTempest;

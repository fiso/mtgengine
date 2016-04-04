"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StormcragElemental extends Card {
  constructor(game) {
    super(game, "Stormcrag Elemental", "Dragons of Tarkir", "DTK");
  }
}

module.exports = StormcragElemental;

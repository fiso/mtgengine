"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WoodElemental extends Card {
  constructor(game) {
    super(game, "Wood Elemental", "Legends", "LEG");
  }
}

module.exports = WoodElemental;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlantElemental extends Card {
  constructor(game) {
    super(game, "Plant Elemental", "Portal", "POR");
  }
}

module.exports = PlantElemental;

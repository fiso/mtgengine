"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WaterspoutElemental extends Card {
  constructor(game) {
    super(game, "Waterspout Elemental", "Planeshift", "PLS");
  }
}

module.exports = WaterspoutElemental;

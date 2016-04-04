"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlaneswalkersMischief extends Card {
  constructor(game) {
    super(game, "Planeswalker's Mischief", "Planeshift", "PLS");
  }
}

module.exports = PlaneswalkersMischief;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlaneswalkersMirth extends Card {
  constructor(game) {
    super(game, "Planeswalker's Mirth", "Planeshift", "PLS");
  }
}

module.exports = PlaneswalkersMirth;

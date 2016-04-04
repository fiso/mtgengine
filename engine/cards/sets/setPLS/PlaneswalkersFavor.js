"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlaneswalkersFavor extends Card {
  constructor(game) {
    super(game, "Planeswalker's Favor", "Planeshift", "PLS");
  }
}

module.exports = PlaneswalkersFavor;

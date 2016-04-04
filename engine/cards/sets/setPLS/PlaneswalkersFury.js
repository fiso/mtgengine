"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlaneswalkersFury extends Card {
  constructor(game) {
    super(game, "Planeswalker's Fury", "Planeshift", "PLS");
  }
}

module.exports = PlaneswalkersFury;

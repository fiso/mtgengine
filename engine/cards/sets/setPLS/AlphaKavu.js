"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AlphaKavu extends Card {
  constructor(game) {
    super(game, "Alpha Kavu", "Planeshift", "PLS");
  }
}

module.exports = AlphaKavu;

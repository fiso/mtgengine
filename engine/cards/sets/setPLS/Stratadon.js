"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Stratadon extends Card {
  constructor(game) {
    super(game, "Stratadon", "Planeshift", "PLS");
  }
}

module.exports = Stratadon;

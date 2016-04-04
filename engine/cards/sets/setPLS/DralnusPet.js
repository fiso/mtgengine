"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DralnusPet extends Card {
  constructor(game) {
    super(game, "Dralnu's Pet", "Planeshift", "PLS");
  }
}

module.exports = DralnusPet;

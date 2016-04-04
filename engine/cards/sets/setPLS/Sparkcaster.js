"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sparkcaster extends Card {
  constructor(game) {
    super(game, "Sparkcaster", "Planeshift", "PLS");
  }
}

module.exports = Sparkcaster;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Strafe extends Card {
  constructor(game) {
    super(game, "Strafe", "Planeshift", "PLS");
  }
}

module.exports = Strafe;

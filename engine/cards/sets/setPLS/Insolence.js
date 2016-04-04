"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Insolence extends Card {
  constructor(game) {
    super(game, "Insolence", "Planeshift", "PLS");
  }
}

module.exports = Insolence;

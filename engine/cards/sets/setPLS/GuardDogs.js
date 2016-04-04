"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GuardDogs extends Card {
  constructor(game) {
    super(game, "Guard Dogs", "Planeshift", "PLS");
  }
}

module.exports = GuardDogs;

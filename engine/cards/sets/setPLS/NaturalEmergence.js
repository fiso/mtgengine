"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NaturalEmergence extends Card {
  constructor(game) {
    super(game, "Natural Emergence", "Planeshift", "PLS");
  }
}

module.exports = NaturalEmergence;

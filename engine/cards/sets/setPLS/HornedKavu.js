"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HornedKavu extends Card {
  constructor(game) {
    super(game, "Horned Kavu", "Planeshift", "PLS");
  }
}

module.exports = HornedKavu;

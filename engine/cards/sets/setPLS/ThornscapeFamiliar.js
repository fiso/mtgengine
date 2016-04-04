"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThornscapeFamiliar extends Card {
  constructor(game) {
    super(game, "Thornscape Familiar", "Planeshift", "PLS");
  }
}

module.exports = ThornscapeFamiliar;

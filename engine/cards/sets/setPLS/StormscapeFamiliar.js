"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StormscapeFamiliar extends Card {
  constructor(game) {
    super(game, "Stormscape Familiar", "Planeshift", "PLS");
  }
}

module.exports = StormscapeFamiliar;

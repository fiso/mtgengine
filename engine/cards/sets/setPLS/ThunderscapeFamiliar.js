"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThunderscapeFamiliar extends Card {
  constructor(game) {
    super(game, "Thunderscape Familiar", "Planeshift", "PLS");
  }
}

module.exports = ThunderscapeFamiliar;

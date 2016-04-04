"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CoralReef extends Card {
  constructor(game) {
    super(game, "Coral Reef", "Homelands", "HML");
  }
}

module.exports = CoralReef;

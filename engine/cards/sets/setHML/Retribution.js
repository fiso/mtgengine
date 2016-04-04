"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Retribution extends Card {
  constructor(game) {
    super(game, "Retribution", "Homelands", "HML");
  }
}

module.exports = Retribution;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Evaporate extends Card {
  constructor(game) {
    super(game, "Evaporate", "Homelands", "HML");
  }
}

module.exports = Evaporate;

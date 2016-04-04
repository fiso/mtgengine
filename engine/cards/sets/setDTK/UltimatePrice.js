"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UltimatePrice extends Card {
  constructor(game) {
    super(game, "Ultimate Price", "Dragons of Tarkir", "DTK");
  }
}

module.exports = UltimatePrice;

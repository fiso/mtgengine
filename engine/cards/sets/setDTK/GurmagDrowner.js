"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GurmagDrowner extends Card {
  constructor(game) {
    super(game, "Gurmag Drowner", "Dragons of Tarkir", "DTK");
  }
}

module.exports = GurmagDrowner;

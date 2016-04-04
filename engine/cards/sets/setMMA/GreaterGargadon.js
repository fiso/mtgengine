"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GreaterGargadon extends Card {
  constructor(game) {
    super(game, "Greater Gargadon", "Modern Masters", "MMA");
  }
}

module.exports = GreaterGargadon;

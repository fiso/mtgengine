"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BarbedFoliage extends Card {
  constructor(game) {
    super(game, "Barbed Foliage", "Mirage", "MIR");
  }
}

module.exports = BarbedFoliage;

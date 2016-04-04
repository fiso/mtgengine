"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DenseFoliage extends Card {
  constructor(game) {
    super(game, "Dense Foliage", "Classic Sixth Edition", "6ED");
  }
}

module.exports = DenseFoliage;

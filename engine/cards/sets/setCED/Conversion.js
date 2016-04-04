"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Conversion extends Card {
  constructor(game) {
    super(game, "Conversion", "Collector's Edition", "CED");
  }
}

module.exports = Conversion;

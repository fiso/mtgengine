"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UndergroundSea extends Card {
  constructor(game) {
    super(game, "Underground Sea", "Collector's Edition", "CED");
  }
}

module.exports = UndergroundSea;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ConvalescentCare extends Card {
  constructor(game) {
    super(game, "Convalescent Care", "Onslaught", "ONS");
  }
}

module.exports = ConvalescentCare;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrcishMine extends Card {
  constructor(game) {
    super(game, "Orcish Mine", "Homelands", "HML");
  }
}

module.exports = OrcishMine;

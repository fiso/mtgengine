"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CityofSolitude extends Card {
  constructor(game) {
    super(game, "City of Solitude", "Visions", "VIS");
  }
}

module.exports = CityofSolitude;

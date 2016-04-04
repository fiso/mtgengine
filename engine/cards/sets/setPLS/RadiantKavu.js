"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RadiantKavu extends Card {
  constructor(game) {
    super(game, "Radiant Kavu", "Planeshift", "PLS");
  }
}

module.exports = RadiantKavu;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StoneKavu extends Card {
  constructor(game) {
    super(game, "Stone Kavu", "Planeshift", "PLS");
  }
}

module.exports = StoneKavu;

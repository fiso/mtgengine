"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MireKavu extends Card {
  constructor(game) {
    super(game, "Mire Kavu", "Planeshift", "PLS");
  }
}

module.exports = MireKavu;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Singe extends Card {
  constructor(game) {
    super(game, "Singe", "Planeshift", "PLS");
  }
}

module.exports = Singe;

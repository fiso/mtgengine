"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarchofSouls extends Card {
  constructor(game) {
    super(game, "March of Souls", "Planeshift", "PLS");
  }
}

module.exports = MarchofSouls;

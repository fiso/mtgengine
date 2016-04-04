"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VolcanoImp extends Card {
  constructor(game) {
    super(game, "Volcano Imp", "Planeshift", "PLS");
  }
}

module.exports = VolcanoImp;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EladamrisCall extends Card {
  constructor(game) {
    super(game, "Eladamri's Call", "Planeshift", "PLS");
  }
}

module.exports = EladamrisCall;

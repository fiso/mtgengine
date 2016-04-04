"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SimicManipulator extends Card {
  constructor(game) {
    super(game, "Simic Manipulator", "Gatecrash", "GTC");
  }
}

module.exports = SimicManipulator;

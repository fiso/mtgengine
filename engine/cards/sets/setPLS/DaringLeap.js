"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DaringLeap extends Card {
  constructor(game) {
    super(game, "Daring Leap", "Planeshift", "PLS");
  }
}

module.exports = DaringLeap;

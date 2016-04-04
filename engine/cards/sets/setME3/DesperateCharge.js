"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DesperateCharge extends Card {
  constructor(game) {
    super(game, "Desperate Charge", "Masters Edition III", "ME3");
  }
}

module.exports = DesperateCharge;

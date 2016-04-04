"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RecklessCharge extends Card {
  constructor(game) {
    super(game, "Reckless Charge", "Odyssey", "ODY");
  }
}

module.exports = RecklessCharge;

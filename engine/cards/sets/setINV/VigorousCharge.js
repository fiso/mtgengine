"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VigorousCharge extends Card {
  constructor(game) {
    super(game, "Vigorous Charge", "Invasion", "INV");
  }
}

module.exports = VigorousCharge;

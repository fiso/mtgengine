"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WindborneCharge extends Card {
  constructor(game) {
    super(game, "Windborne Charge", "Zendikar", "ZEN");
  }
}

module.exports = WindborneCharge;

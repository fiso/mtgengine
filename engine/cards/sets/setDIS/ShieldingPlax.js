"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShieldingPlax extends Card {
  constructor(game) {
    super(game, "Shielding Plax", "Dissension", "DIS");
  }
}

module.exports = ShieldingPlax;

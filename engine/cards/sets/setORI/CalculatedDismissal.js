"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CalculatedDismissal extends Card {
  constructor(game) {
    super(game, "Calculated Dismissal", "Magic Origins", "ORI");
  }
}

module.exports = CalculatedDismissal;

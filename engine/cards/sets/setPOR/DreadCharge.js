"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DreadCharge extends Card {
  constructor(game) {
    super(game, "Dread Charge", "Portal", "POR");
  }
}

module.exports = DreadCharge;

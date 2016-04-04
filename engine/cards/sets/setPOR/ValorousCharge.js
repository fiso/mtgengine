"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ValorousCharge extends Card {
  constructor(game) {
    super(game, "Valorous Charge", "Portal", "POR");
  }
}

module.exports = ValorousCharge;

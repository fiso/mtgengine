"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DakmorBat extends Card {
  constructor(game) {
    super(game, "Dakmor Bat", "Portal Second Age", "PO2");
  }
}

module.exports = DakmorBat;

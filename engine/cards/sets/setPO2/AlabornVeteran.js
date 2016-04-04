"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AlabornVeteran extends Card {
  constructor(game) {
    super(game, "Alaborn Veteran", "Portal Second Age", "PO2");
  }
}

module.exports = AlabornVeteran;

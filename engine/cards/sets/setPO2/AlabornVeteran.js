"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlabornVeteran extends UnimplementedCard {
  constructor(game) {
    super(game, "Alaborn Veteran", "Portal Second Age", "PO2");
  }
}

module.exports = AlabornVeteran;

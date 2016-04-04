"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlabornGrenadier extends UnimplementedCard {
  constructor(game) {
    super(game, "Alaborn Grenadier", "Portal Second Age", "PO2");
  }
}

module.exports = AlabornGrenadier;

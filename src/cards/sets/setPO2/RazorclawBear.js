"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RazorclawBear extends UnimplementedCard {
  constructor(game) {
    super(game, "Razorclaw Bear", "Portal Second Age", "PO2");
  }
}

module.exports = RazorclawBear;

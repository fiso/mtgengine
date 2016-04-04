"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RazorclawBear extends Card {
  constructor(game) {
    super(game, "Razorclaw Bear", "Portal Second Age", "PO2");
  }
}

module.exports = RazorclawBear;

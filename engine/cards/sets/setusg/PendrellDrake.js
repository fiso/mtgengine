"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PendrellDrake extends Card {
  constructor(game) {
    super(game, "Pendrell Drake", "Urza's Saga", "USG");
  }
}

module.exports = PendrellDrake;

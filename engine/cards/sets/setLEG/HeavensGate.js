"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeavensGate extends Card {
  constructor(game) {
    super(game, "Heaven's Gate", "Legends", "LEG");
  }
}

module.exports = HeavensGate;

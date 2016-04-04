"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Fatigue extends Card {
  constructor(game) {
    super(game, "Fatigue", "Urza's Destiny", "UDS");
  }
}

module.exports = Fatigue;

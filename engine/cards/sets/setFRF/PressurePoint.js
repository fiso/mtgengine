"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PressurePoint extends Card {
  constructor(game) {
    super(game, "Pressure Point", "Fate Reforged", "FRF");
  }
}

module.exports = PressurePoint;

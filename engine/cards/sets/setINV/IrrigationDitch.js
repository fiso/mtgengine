"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IrrigationDitch extends Card {
  constructor(game) {
    super(game, "Irrigation Ditch", "Invasion", "INV");
  }
}

module.exports = IrrigationDitch;

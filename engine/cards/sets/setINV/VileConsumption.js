"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VileConsumption extends Card {
  constructor(game) {
    super(game, "Vile Consumption", "Invasion", "INV");
  }
}

module.exports = VileConsumption;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InverterofTruth extends Card {
  constructor(game) {
    super(game, "Inverter of Truth", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = InverterofTruth;

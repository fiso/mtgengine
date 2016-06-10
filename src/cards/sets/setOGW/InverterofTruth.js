"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InverterofTruth extends UnimplementedCard {
  constructor (game) {
    super(game, "Inverter of Truth", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = InverterofTruth;

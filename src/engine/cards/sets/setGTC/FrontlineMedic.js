"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrontlineMedic extends UnimplementedCard {
  constructor (game) {
    super(game, "Frontline Medic", "Gatecrash", "GTC");
  }
}

module.exports = FrontlineMedic;

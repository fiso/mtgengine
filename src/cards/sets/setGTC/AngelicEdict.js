"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelicEdict extends UnimplementedCard {
  constructor (game) {
    super(game, "Angelic Edict", "Gatecrash", "GTC");
  }
}

module.exports = AngelicEdict;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThrullParasite extends UnimplementedCard {
  constructor (game) {
    super(game, "Thrull Parasite", "Gatecrash", "GTC");
  }
}

module.exports = ThrullParasite;

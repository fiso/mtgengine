"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NightveilSpecter extends UnimplementedCard {
  constructor(game) {
    super(game, "Nightveil Specter", "Gatecrash", "GTC");
  }
}

module.exports = NightveilSpecter;

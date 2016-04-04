"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElusiveKrasis extends UnimplementedCard {
  constructor(game) {
    super(game, "Elusive Krasis", "Gatecrash", "GTC");
  }
}

module.exports = ElusiveKrasis;

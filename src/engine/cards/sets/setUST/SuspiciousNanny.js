"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SuspiciousNanny extends UnimplementedCard {
  constructor (game) {
    super(game, "Suspicious Nanny", "Unstable", "UST");
  }
}

module.exports = SuspiciousNanny;

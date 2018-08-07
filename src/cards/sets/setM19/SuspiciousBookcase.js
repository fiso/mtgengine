"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SuspiciousBookcase extends UnimplementedCard {
  constructor (game) {
    super(game, "Suspicious Bookcase", "Core Set 2019", "M19");
  }
}

module.exports = SuspiciousBookcase;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MobileGarrison extends UnimplementedCard {
  constructor (game) {
    super(game, "Mobile Garrison", "Aether Revolt", "AER");
  }
}

module.exports = MobileGarrison;

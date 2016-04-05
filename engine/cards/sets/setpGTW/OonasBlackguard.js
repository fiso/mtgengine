"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OonasBlackguard extends UnimplementedCard {
  constructor(game) {
    super(game, "Oona's Blackguard", "Gateway", "pGTW");
  }
}

module.exports = OonasBlackguard;

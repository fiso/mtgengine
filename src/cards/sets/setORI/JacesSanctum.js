"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JacesSanctum extends UnimplementedCard {
  constructor(game) {
    super(game, "Jace's Sanctum", "Magic Origins", "ORI");
  }
}

module.exports = JacesSanctum;

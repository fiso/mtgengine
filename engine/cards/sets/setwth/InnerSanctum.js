"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InnerSanctum extends UnimplementedCard {
  constructor(game) {
    super(game, "Inner Sanctum", "Weatherlight", "WTH");
  }
}

module.exports = InnerSanctum;

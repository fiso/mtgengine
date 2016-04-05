"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Standstill extends UnimplementedCard {
  constructor(game) {
    super(game, "Standstill", "Media Inserts", "pMEI");
  }
}

module.exports = Standstill;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CruelCut extends UnimplementedCard {
  constructor (game) {
    super(game, "Cruel Cut", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = CruelCut;

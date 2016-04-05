"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CateranSummons extends UnimplementedCard {
  constructor(game) {
    super(game, "Cateran Summons", "Mercadian Masques", "MMQ");
  }
}

module.exports = CateranSummons;

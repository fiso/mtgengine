"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FungalBehemoth extends UnimplementedCard {
  constructor (game) {
    super(game, "Fungal Behemoth", "Planar Chaos", "PLC");
  }
}

module.exports = FungalBehemoth;

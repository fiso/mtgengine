"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TroubledHealer extends UnimplementedCard {
  constructor (game) {
    super(game, "Troubled Healer", "Prophecy", "PCY");
  }
}

module.exports = TroubledHealer;

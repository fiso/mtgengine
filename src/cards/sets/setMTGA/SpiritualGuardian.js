"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiritualGuardian extends UnimplementedCard {
  constructor (game) {
    super(game, "Spiritual Guardian", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = SpiritualGuardian;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiritualGuardian extends UnimplementedCard {
  constructor(game) {
    super(game, "Spiritual Guardian", "Portal", "POR");
  }
}

module.exports = SpiritualGuardian;

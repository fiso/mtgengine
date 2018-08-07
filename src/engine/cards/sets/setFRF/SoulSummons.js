"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulSummons extends UnimplementedCard {
  constructor (game) {
    super(game, "Soul Summons", "Fate Reforged", "FRF");
  }
}

module.exports = SoulSummons;

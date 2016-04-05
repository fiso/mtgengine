"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulSnuffers extends UnimplementedCard {
  constructor(game) {
    super(game, "Soul Snuffers", "Eventide", "EVE");
  }
}

module.exports = SoulSnuffers;

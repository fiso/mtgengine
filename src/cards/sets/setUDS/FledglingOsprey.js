"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FledglingOsprey extends UnimplementedCard {
  constructor (game) {
    super(game, "Fledgling Osprey", "Urza's Destiny", "UDS");
  }
}

module.exports = FledglingOsprey;

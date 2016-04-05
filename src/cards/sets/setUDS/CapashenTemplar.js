"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CapashenTemplar extends UnimplementedCard {
  constructor(game) {
    super(game, "Capashen Templar", "Urza's Destiny", "UDS");
  }
}

module.exports = CapashenTemplar;

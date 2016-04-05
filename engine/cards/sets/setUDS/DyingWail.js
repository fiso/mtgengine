"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DyingWail extends UnimplementedCard {
  constructor(game) {
    super(game, "Dying Wail", "Urza's Destiny", "UDS");
  }
}

module.exports = DyingWail;

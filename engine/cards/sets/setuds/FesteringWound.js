"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FesteringWound extends UnimplementedCard {
  constructor(game) {
    super(game, "Festering Wound", "Urza's Destiny", "UDS");
  }
}

module.exports = FesteringWound;

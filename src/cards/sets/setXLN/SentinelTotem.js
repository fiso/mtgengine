"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SentinelTotem extends UnimplementedCard {
  constructor (game) {
    super(game, "Sentinel Totem", "Ixalan", "XLN");
  }
}

module.exports = SentinelTotem;

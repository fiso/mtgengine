"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiftofOrzhova extends UnimplementedCard {
  constructor(game) {
    super(game, "Gift of Orzhova", "Gatecrash", "GTC");
  }
}

module.exports = GiftofOrzhova;

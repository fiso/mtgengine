"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BullAurochs extends UnimplementedCard {
  constructor(game) {
    super(game, "Bull Aurochs", "Coldsnap", "CSP");
  }
}

module.exports = BullAurochs;

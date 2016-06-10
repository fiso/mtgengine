"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShadowSlice extends UnimplementedCard {
  constructor (game) {
    super(game, "Shadow Slice", "Gatecrash", "GTC");
  }
}

module.exports = ShadowSlice;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShadowSlice extends Card {
  constructor(game) {
    super(game, "Shadow Slice", "Gatecrash", "GTC");
  }
}

module.exports = ShadowSlice;

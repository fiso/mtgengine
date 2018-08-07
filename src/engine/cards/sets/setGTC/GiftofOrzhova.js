"use strict";
const Constants = require ("../../../Constants");
const GiftofOrzhovaBase = require("../setMM3/GiftofOrzhova");

class GiftofOrzhova extends GiftofOrzhovaBase {
  constructor (game) {
    super(game, "Gift of Orzhova", "Gatecrash", "GTC");
  }
}

module.exports = GiftofOrzhova;

"use strict";
const Constants = require ("../../../Constants");
const LightningHoundsBase = require("../setpMEI/LightningHounds");

class LightningHounds extends LightningHoundsBase {
  constructor (game) {
    super(game, "Lightning Hounds", "Mercadian Masques", "MMQ");
  }
}

module.exports = LightningHounds;

"use strict";
const Constants = require ("../../../Constants");
const LightningHoundsBase = require("../setPRM/LightningHounds");

class LightningHounds extends LightningHoundsBase {
  constructor (game) {
    super(game, "Lightning Hounds", "Mercadian Masques", "MMQ");
  }
}

module.exports = LightningHounds;

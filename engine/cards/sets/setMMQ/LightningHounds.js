"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LightningHoundsBase = require("../setpMEI/LightningHounds.js");

class LightningHounds extends LightningHoundsBase {
  constructor(game) {
    super(game, "Lightning Hounds", "Mercadian Masques", "MMQ");
  }
}

module.exports = LightningHounds;

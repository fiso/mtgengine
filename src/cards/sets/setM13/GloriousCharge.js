"use strict";
const Constants = require ("../../../Constants");
const GloriousChargeBase = require("../setM10/GloriousCharge");

class GloriousCharge extends GloriousChargeBase {
  constructor (game) {
    super(game, "Glorious Charge", "Magic 2013", "M13");
  }
}

module.exports = GloriousCharge;

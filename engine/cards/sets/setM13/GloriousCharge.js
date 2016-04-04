"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GloriousChargeBase = require("../setM10/GloriousCharge.js");

class GloriousCharge extends GloriousChargeBase {
  constructor(game) {
    super(game, "Glorious Charge", "Magic 2013", "M13");
  }
}

module.exports = GloriousCharge;

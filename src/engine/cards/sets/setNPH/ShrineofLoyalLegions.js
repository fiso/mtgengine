"use strict";
const Constants = require ("../../../Constants");
const ShrineofLoyalLegionsBase = require("../setMD1/ShrineofLoyalLegions");

class ShrineofLoyalLegions extends ShrineofLoyalLegionsBase {
  constructor (game) {
    super(game, "Shrine of Loyal Legions", "New Phyrexia", "NPH");
  }
}

module.exports = ShrineofLoyalLegions;

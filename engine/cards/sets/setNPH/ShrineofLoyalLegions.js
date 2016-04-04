"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShrineofLoyalLegionsBase = require("../setMD1/ShrineofLoyalLegions.js");

class ShrineofLoyalLegions extends ShrineofLoyalLegionsBase {
  constructor(game) {
    super(game, "Shrine of Loyal Legions", "New Phyrexia", "NPH");
  }
}

module.exports = ShrineofLoyalLegions;

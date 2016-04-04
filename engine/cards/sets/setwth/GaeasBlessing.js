"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GaeasBlessingBase = require("../setpARL/GaeasBlessing.js");

class GaeasBlessing extends GaeasBlessingBase {
  constructor(game) {
    super(game, "Gaea's Blessing", "Weatherlight", "WTH");
  }
}

module.exports = GaeasBlessing;

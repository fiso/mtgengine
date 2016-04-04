"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PlagueMyrBase = require("../setMBS/PlagueMyr.js");

class PlagueMyr extends PlagueMyrBase {
  constructor(game) {
    super(game, "Plague Myr", "WPN and Gateway", "pWPN");
  }
}

module.exports = PlagueMyr;

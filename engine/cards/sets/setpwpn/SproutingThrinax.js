"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SproutingThrinaxBase = require("../setC13/SproutingThrinax.js");

class SproutingThrinax extends SproutingThrinaxBase {
  constructor(game) {
    super(game, "Sprouting Thrinax", "WPN and Gateway", "pWPN");
  }
}

module.exports = SproutingThrinax;

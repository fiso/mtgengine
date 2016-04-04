"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrimHaruspexBase = require("../setKTK/GrimHaruspex.js");

class GrimHaruspex extends GrimHaruspexBase {
  constructor(game) {
    super(game, "Grim Haruspex", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = GrimHaruspex;

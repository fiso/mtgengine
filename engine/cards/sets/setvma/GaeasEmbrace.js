"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GaeasEmbraceBase = require("../setUSG/GaeasEmbrace.js");

class GaeasEmbrace extends GaeasEmbraceBase {
  constructor(game) {
    super(game, "Gaea's Embrace", "Vintage Masters", "VMA");
  }
}

module.exports = GaeasEmbrace;

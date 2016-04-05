"use strict";
const Constants = require ("../../../Constants");
const GaeasEmbraceBase = require("../setUSG/GaeasEmbrace");

class GaeasEmbrace extends GaeasEmbraceBase {
  constructor(game) {
    super(game, "Gaea's Embrace", "Vintage Masters", "VMA");
  }
}

module.exports = GaeasEmbrace;

"use strict";
const Constants = require ("../../../Constants");
const RadiatingLightningBase = require("../setM19/RadiatingLightning");

class RadiatingLightning extends RadiatingLightningBase {
  constructor (game) {
    super(game, "Radiating Lightning", "Dominaria", "DOM");
  }
}

module.exports = RadiatingLightning;

"use strict";
const Constants = require ("../../../Constants");
const GaeasCradleBase = require("../setOLGC/GaeasCradle");

class GaeasCradle extends GaeasCradleBase {
  constructor (game) {
    super(game, "Gaea's Cradle", "Urza's Saga", "USG");
  }
}

module.exports = GaeasCradle;

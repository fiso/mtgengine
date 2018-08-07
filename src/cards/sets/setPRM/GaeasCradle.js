"use strict";
const Constants = require ("../../../Constants");
const GaeasCradleBase = require("../setOLGC/GaeasCradle");

class GaeasCradle extends GaeasCradleBase {
  constructor (game) {
    super(game, "Gaea's Cradle", "Magic Online Promos", "PRM");
  }
}

module.exports = GaeasCradle;

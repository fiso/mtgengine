"use strict";
const Constants = require ("../../../Constants");
const GaeasCradleBase = require("../setOLGC/GaeasCradle");

class GaeasCradle extends GaeasCradleBase {
  constructor (game) {
    super(game, "Gaea's Cradle", "World Championship Decks 1999", "WC99");
  }
}

module.exports = GaeasCradle;

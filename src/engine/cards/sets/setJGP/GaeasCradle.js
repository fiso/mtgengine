"use strict";
const Constants = require ("../../../Constants");
const GaeasCradleBase = require("../setOLGC/GaeasCradle");

class GaeasCradle extends GaeasCradleBase {
  constructor (game) {
    super(game, "Gaea's Cradle", "Judge Gift Cards 1998", "JGP");
  }
}

module.exports = GaeasCradle;

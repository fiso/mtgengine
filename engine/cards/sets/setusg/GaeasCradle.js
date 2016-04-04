"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GaeasCradleBase = require("../setpJGP/GaeasCradle.js");

class GaeasCradle extends GaeasCradleBase {
  constructor(game) {
    super(game, "Gaea's Cradle", "Urza's Saga", "USG");
  }
}

module.exports = GaeasCradle;

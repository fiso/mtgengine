"use strict";
const Constants = require ("../../../Constants");
const TemporalApertureBase = require("../setWC99/TemporalAperture");

class TemporalAperture extends TemporalApertureBase {
  constructor (game) {
    super(game, "Temporal Aperture", "Urza's Saga", "USG");
  }
}

module.exports = TemporalAperture;

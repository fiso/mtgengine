"use strict";
const Constants = require ("../../../Constants");
const BantPanoramaBase = require("../setCMA/BantPanorama");

class BantPanorama extends BantPanoramaBase {
  constructor (game) {
    super(game, "Bant Panorama", "Commander 2013", "C13");
  }
}

module.exports = BantPanorama;

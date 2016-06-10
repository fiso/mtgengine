"use strict";
const Constants = require ("../../../Constants");
const BantPanoramaBase = require("../setC13/BantPanorama");

class BantPanorama extends BantPanoramaBase {
  constructor (game) {
    super(game, "Bant Panorama", "Shards of Alara", "ALA");
  }
}

module.exports = BantPanorama;

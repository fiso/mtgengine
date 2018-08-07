"use strict";
const Constants = require ("../../../Constants");
const NayaPanoramaBase = require("../setC13/NayaPanorama");

class NayaPanorama extends NayaPanoramaBase {
  constructor (game) {
    super(game, "Naya Panorama", "Shards of Alara", "ALA");
  }
}

module.exports = NayaPanorama;

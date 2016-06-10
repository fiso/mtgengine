"use strict";
const Constants = require ("../../../Constants");
const GrixisPanoramaBase = require("../setC13/GrixisPanorama");

class GrixisPanorama extends GrixisPanoramaBase {
  constructor (game) {
    super(game, "Grixis Panorama", "Shards of Alara", "ALA");
  }
}

module.exports = GrixisPanorama;

"use strict";
const Constants = require ("../../../Constants");
const GrixisPanoramaBase = require("../setC17/GrixisPanorama");

class GrixisPanorama extends GrixisPanoramaBase {
  constructor (game) {
    super(game, "Grixis Panorama", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = GrixisPanorama;

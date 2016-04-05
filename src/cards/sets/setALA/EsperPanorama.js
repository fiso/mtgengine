"use strict";
const Constants = require ("../../../Constants");
const EsperPanoramaBase = require("../setC13/EsperPanorama");

class EsperPanorama extends EsperPanoramaBase {
  constructor(game) {
    super(game, "Esper Panorama", "Shards of Alara", "ALA");
  }
}

module.exports = EsperPanorama;

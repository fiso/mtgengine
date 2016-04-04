"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EsperPanoramaBase = require("../setC13/EsperPanorama.js");

class EsperPanorama extends EsperPanoramaBase {
  constructor(game) {
    super(game, "Esper Panorama", "Shards of Alara", "ALA");
  }
}

module.exports = EsperPanorama;

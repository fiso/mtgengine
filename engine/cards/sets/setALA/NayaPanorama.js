"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NayaPanoramaBase = require("../setC13/NayaPanorama.js");

class NayaPanorama extends NayaPanoramaBase {
  constructor(game) {
    super(game, "Naya Panorama", "Shards of Alara", "ALA");
  }
}

module.exports = NayaPanorama;

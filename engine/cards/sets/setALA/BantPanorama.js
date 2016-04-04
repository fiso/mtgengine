"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BantPanoramaBase = require("../setC13/BantPanorama.js");

class BantPanorama extends BantPanoramaBase {
  constructor(game) {
    super(game, "Bant Panorama", "Shards of Alara", "ALA");
  }
}

module.exports = BantPanorama;

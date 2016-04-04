"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrixisPanoramaBase = require("../setC13/GrixisPanorama.js");

class GrixisPanorama extends GrixisPanoramaBase {
  constructor(game) {
    super(game, "Grixis Panorama", "Shards of Alara", "ALA");
  }
}

module.exports = GrixisPanorama;

"use strict";
const Constants = require ("../../../Constants");
const JundPanoramaBase = require("../setC13/JundPanorama");

class JundPanorama extends JundPanoramaBase {
  constructor(game) {
    super(game, "Jund Panorama", "Shards of Alara", "ALA");
  }
}

module.exports = JundPanorama;

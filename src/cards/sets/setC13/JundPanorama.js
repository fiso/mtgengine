"use strict";
const Constants = require ("../../../Constants");
const JundPanoramaBase = require("../setC18/JundPanorama");

class JundPanorama extends JundPanoramaBase {
  constructor (game) {
    super(game, "Jund Panorama", "Commander 2013", "C13");
  }
}

module.exports = JundPanorama;

"use strict";
const Constants = require ("../../../Constants");
const JundPanoramaBase = require("../setC18/JundPanorama");

class JundPanorama extends JundPanoramaBase {
  constructor (game) {
    super(game, "Jund Panorama", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = JundPanorama;

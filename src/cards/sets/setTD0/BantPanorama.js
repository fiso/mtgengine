"use strict";
const Constants = require ("../../../Constants");
const BantPanoramaBase = require("../setCMA/BantPanorama");

class BantPanorama extends BantPanoramaBase {
  constructor (game) {
    super(game, "Bant Panorama", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = BantPanorama;

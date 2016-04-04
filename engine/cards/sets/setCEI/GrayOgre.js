"use strict";
const Constants = require ("../../../Constants");
const GrayOgreBase = require("../setCED/GrayOgre");

class GrayOgre extends GrayOgreBase {
  constructor(game) {
    super(game, "Gray Ogre", "International Collector's Edition", "CEI");
  }
}

module.exports = GrayOgre;

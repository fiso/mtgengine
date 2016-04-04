"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrayOgreBase = require("../setCED/GrayOgre.js");

class GrayOgre extends GrayOgreBase {
  constructor(game) {
    super(game, "Gray Ogre", "International Collector's Edition", "CEI");
  }
}

module.exports = GrayOgre;

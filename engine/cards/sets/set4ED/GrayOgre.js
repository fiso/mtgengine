"use strict";
const Constants = require ("../../../Constants");
const GrayOgreBase = require("../setCED/GrayOgre");

class GrayOgre extends GrayOgreBase {
  constructor(game) {
    super(game, "Gray Ogre", "Fourth Edition", "4ED");
  }
}

module.exports = GrayOgre;

"use strict";
const Constants = require ("../../../Constants");
const GrayOgreBase = require("../setCED/GrayOgre");

class GrayOgre extends GrayOgreBase {
  constructor(game) {
    super(game, "Gray Ogre", "Revised Edition", "3ED");
  }
}

module.exports = GrayOgre;

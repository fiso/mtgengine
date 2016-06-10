"use strict";
const Constants = require ("../../../Constants");
const GrayOgreBase = require("../setCED/GrayOgre");

class GrayOgre extends GrayOgreBase {
  constructor (game) {
    super(game, "Gray Ogre", "Limited Edition Beta", "LEB");
  }
}

module.exports = GrayOgre;

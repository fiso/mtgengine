"use strict";
const Constants = require ("../../../Constants");
const GrayOgreBase = require("../set4ED/GrayOgre");

class GrayOgre extends GrayOgreBase {
  constructor (game) {
    super(game, "Gray Ogre", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = GrayOgre;

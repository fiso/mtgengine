"use strict";
const Constants = require ("../../../Constants");
const GrayOgreBase = require("../set4ED/GrayOgre");

class GrayOgre extends GrayOgreBase {
  constructor (game) {
    super(game, "Gray Ogre", "Collectors’ Edition", "CED");
  }
}

module.exports = GrayOgre;

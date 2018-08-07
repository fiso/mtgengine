"use strict";
const Constants = require ("../../../Constants");
const GrayOgreBase = require("../set4ED/GrayOgre");

class GrayOgre extends GrayOgreBase {
  constructor (game) {
    super(game, "Gray Ogre", "Unlimited Edition", "2ED");
  }
}

module.exports = GrayOgre;

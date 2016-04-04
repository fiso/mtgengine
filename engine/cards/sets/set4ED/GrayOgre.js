"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrayOgreBase = require("../setCED/GrayOgre.js");

class GrayOgre extends GrayOgreBase {
  constructor(game) {
    super(game, "Gray Ogre", "Fourth Edition", "4ED");
  }
}

module.exports = GrayOgre;

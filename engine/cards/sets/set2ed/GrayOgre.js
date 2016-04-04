"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrayOgreBase = require("../setCED/GrayOgre.js");

class GrayOgre extends GrayOgreBase {
  constructor(game) {
    super(game, "Gray Ogre", "Unlimited Edition", "2ED");
  }
}

module.exports = GrayOgre;

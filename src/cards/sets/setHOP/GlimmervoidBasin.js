"use strict";
const Constants = require ("../../../Constants");
const GlimmervoidBasinBase = require("../setPCA/GlimmervoidBasin");

class GlimmervoidBasin extends GlimmervoidBasinBase {
  constructor (game) {
    super(game, "Glimmervoid Basin", "Planechase", "HOP");
  }
}

module.exports = GlimmervoidBasin;

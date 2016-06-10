"use strict";
const Constants = require ("../../../Constants");
const GlimmervoidBase = require("../setMRD/Glimmervoid");

class Glimmervoid extends GlimmervoidBase {
  constructor (game) {
    super(game, "Glimmervoid", "Modern Masters", "MMA");
  }
}

module.exports = Glimmervoid;

"use strict";
const Constants = require ("../../../Constants");
const GlimmervoidBase = require("../setMMA/Glimmervoid");

class Glimmervoid extends GlimmervoidBase {
  constructor (game) {
    super(game, "Glimmervoid", "Mirrodin", "MRD");
  }
}

module.exports = Glimmervoid;

"use strict";
const Constants = require ("../../../Constants");
const ToothandNailBase = require("../setMMA/ToothandNail");

class ToothandNail extends ToothandNailBase {
  constructor (game) {
    super(game, "Tooth and Nail", "Mirrodin", "MRD");
  }
}

module.exports = ToothandNail;

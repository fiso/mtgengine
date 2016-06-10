"use strict";
const Constants = require ("../../../Constants");
const ToothandNailBase = require("../setMRD/ToothandNail");

class ToothandNail extends ToothandNailBase {
  constructor (game) {
    super(game, "Tooth and Nail", "Modern Masters", "MMA");
  }
}

module.exports = ToothandNail;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ToothandNailBase = require("../setMRD/ToothandNail.js");

class ToothandNail extends ToothandNailBase {
  constructor(game) {
    super(game, "Tooth and Nail", "Modern Masters", "MMA");
  }
}

module.exports = ToothandNail;

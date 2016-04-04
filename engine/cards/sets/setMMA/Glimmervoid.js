"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GlimmervoidBase = require("../setMRD/Glimmervoid.js");

class Glimmervoid extends GlimmervoidBase {
  constructor(game) {
    super(game, "Glimmervoid", "Modern Masters", "MMA");
  }
}

module.exports = Glimmervoid;

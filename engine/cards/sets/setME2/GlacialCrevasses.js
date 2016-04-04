"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GlacialCrevassesBase = require("../setICE/GlacialCrevasses.js");

class GlacialCrevasses extends GlacialCrevassesBase {
  constructor(game) {
    super(game, "Glacial Crevasses", "Masters Edition II", "ME2");
  }
}

module.exports = GlacialCrevasses;

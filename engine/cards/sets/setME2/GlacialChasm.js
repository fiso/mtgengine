"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GlacialChasmBase = require("../setV12/GlacialChasm.js");

class GlacialChasm extends GlacialChasmBase {
  constructor(game) {
    super(game, "Glacial Chasm", "Masters Edition II", "ME2");
  }
}

module.exports = GlacialChasm;

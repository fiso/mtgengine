"use strict";
const Constants = require ("../../../Constants");
const GlacialChasmBase = require("../setV12/GlacialChasm");

class GlacialChasm extends GlacialChasmBase {
  constructor(game) {
    super(game, "Glacial Chasm", "Ice Age", "ICE");
  }
}

module.exports = GlacialChasm;

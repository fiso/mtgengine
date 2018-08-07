"use strict";
const Constants = require ("../../../Constants");
const ConvoluteBase = require("../setEMN/Convolute");

class Convolute extends ConvoluteBase {
  constructor (game) {
    super(game, "Convolute", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Convolute;

"use strict";
const Constants = require ("../../../Constants");
const MistfolkBase = require("../setCST/Mistfolk");

class Mistfolk extends MistfolkBase {
  constructor(game) {
    super(game, "Mistfolk", "Ice Age", "ICE");
  }
}

module.exports = Mistfolk;

"use strict";
const Constants = require ("../../../Constants");
const SyphonMindBase = require("../setC14/SyphonMind");

class SyphonMind extends SyphonMindBase {
  constructor (game) {
    super(game, "Syphon Mind", "WPN and Gateway", "pWPN");
  }
}

module.exports = SyphonMind;

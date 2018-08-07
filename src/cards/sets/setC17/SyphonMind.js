"use strict";
const Constants = require ("../../../Constants");
const SyphonMindBase = require("../setCM2/SyphonMind");

class SyphonMind extends SyphonMindBase {
  constructor (game) {
    super(game, "Syphon Mind", "Commander 2017", "C17");
  }
}

module.exports = SyphonMind;

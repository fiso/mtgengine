"use strict";
const Constants = require ("../../../Constants");
const SyphonMindBase = require("../setCM2/SyphonMind");

class SyphonMind extends SyphonMindBase {
  constructor (game) {
    super(game, "Syphon Mind", "Onslaught", "ONS");
  }
}

module.exports = SyphonMind;

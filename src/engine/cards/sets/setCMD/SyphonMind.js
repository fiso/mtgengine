"use strict";
const Constants = require ("../../../Constants");
const SyphonMindBase = require("../setCM2/SyphonMind");

class SyphonMind extends SyphonMindBase {
  constructor (game) {
    super(game, "Syphon Mind", "Commander 2011", "CMD");
  }
}

module.exports = SyphonMind;

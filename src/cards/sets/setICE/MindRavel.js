"use strict";
const Constants = require ("../../../Constants");
const MindRavelBase = require("../set5ED/MindRavel");

class MindRavel extends MindRavelBase {
  constructor(game) {
    super(game, "Mind Ravel", "Ice Age", "ICE");
  }
}

module.exports = MindRavel;

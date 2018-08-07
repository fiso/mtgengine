"use strict";
const Constants = require ("../../../Constants");
const SyphonMindBase = require("../setCM2/SyphonMind");

class SyphonMind extends SyphonMindBase {
  constructor (game) {
    super(game, "Syphon Mind", "Wizards Play Network 2010", "PWP10");
  }
}

module.exports = SyphonMind;

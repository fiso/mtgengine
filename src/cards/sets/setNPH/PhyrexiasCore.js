"use strict";
const Constants = require ("../../../Constants");
const PhyrexiasCoreBase = require("../setCM2/PhyrexiasCore");

class PhyrexiasCore extends PhyrexiasCoreBase {
  constructor (game) {
    super(game, "Phyrexia's Core", "New Phyrexia", "NPH");
  }
}

module.exports = PhyrexiasCore;

"use strict";
const Constants = require ("../../../Constants");
const PhyrexiasCoreBase = require("../setCM2/PhyrexiasCore");

class PhyrexiasCore extends PhyrexiasCoreBase {
  constructor (game) {
    super(game, "Phyrexia's Core", "Commander 2014", "C14");
  }
}

module.exports = PhyrexiasCore;

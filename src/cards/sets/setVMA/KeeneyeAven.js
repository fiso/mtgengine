"use strict";
const Constants = require ("../../../Constants");
const KeeneyeAvenBase = require("../setLGN/KeeneyeAven");

class KeeneyeAven extends KeeneyeAvenBase {
  constructor (game) {
    super(game, "Keeneye Aven", "Vintage Masters", "VMA");
  }
}

module.exports = KeeneyeAven;

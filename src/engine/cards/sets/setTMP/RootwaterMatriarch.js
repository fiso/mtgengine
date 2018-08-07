"use strict";
const Constants = require ("../../../Constants");
const RootwaterMatriarchBase = require("../set10E/RootwaterMatriarch");

class RootwaterMatriarch extends RootwaterMatriarchBase {
  constructor (game) {
    super(game, "Rootwater Matriarch", "Tempest", "TMP");
  }
}

module.exports = RootwaterMatriarch;

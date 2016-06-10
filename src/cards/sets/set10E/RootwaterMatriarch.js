"use strict";
const Constants = require ("../../../Constants");
const RootwaterMatriarchBase = require("../setTMP/RootwaterMatriarch");

class RootwaterMatriarch extends RootwaterMatriarchBase {
  constructor (game) {
    super(game, "Rootwater Matriarch", "Tenth Edition", "10E");
  }
}

module.exports = RootwaterMatriarch;

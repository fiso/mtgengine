"use strict";
const Constants = require ("../../../Constants");
const RegisaurAlphaBase = require("../setXLN/RegisaurAlpha");

class RegisaurAlpha extends RegisaurAlphaBase {
  constructor (game) {
    super(game, "Regisaur Alpha", "Ixalan Promos", "PXLN");
  }
}

module.exports = RegisaurAlpha;

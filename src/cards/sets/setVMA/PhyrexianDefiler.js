"use strict";
const Constants = require ("../../../Constants");
const PhyrexianDefilerBase = require("../setDDE/PhyrexianDefiler");

class PhyrexianDefiler extends PhyrexianDefilerBase {
  constructor(game) {
    super(game, "Phyrexian Defiler", "Vintage Masters", "VMA");
  }
}

module.exports = PhyrexianDefiler;

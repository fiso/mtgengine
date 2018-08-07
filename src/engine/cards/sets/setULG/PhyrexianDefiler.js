"use strict";
const Constants = require ("../../../Constants");
const PhyrexianDefilerBase = require("../setVMA/PhyrexianDefiler");

class PhyrexianDefiler extends PhyrexianDefilerBase {
  constructor (game) {
    super(game, "Phyrexian Defiler", "Urza's Legacy", "ULG");
  }
}

module.exports = PhyrexianDefiler;

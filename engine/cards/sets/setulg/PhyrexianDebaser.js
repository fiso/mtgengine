"use strict";
const Constants = require ("../../../Constants");
const PhyrexianDebaserBase = require("../setDDE/PhyrexianDebaser");

class PhyrexianDebaser extends PhyrexianDebaserBase {
  constructor(game) {
    super(game, "Phyrexian Debaser", "Urza's Legacy", "ULG");
  }
}

module.exports = PhyrexianDebaser;

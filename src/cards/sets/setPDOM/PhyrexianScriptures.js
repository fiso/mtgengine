"use strict";
const Constants = require ("../../../Constants");
const PhyrexianScripturesBase = require("../setDOM/PhyrexianScriptures");

class PhyrexianScriptures extends PhyrexianScripturesBase {
  constructor (game) {
    super(game, "Phyrexian Scriptures", "Dominaria Promos", "PDOM");
  }
}

module.exports = PhyrexianScriptures;

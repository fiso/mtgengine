"use strict";
const Constants = require ("../../../Constants");
const SylvanMightBase = require("../setDDS/SylvanMight");

class SylvanMight extends SylvanMightBase {
  constructor (game) {
    super(game, "Sylvan Might", "Eternal Masters", "EMA");
  }
}

module.exports = SylvanMight;

"use strict";
const Constants = require ("../../../Constants");
const CowerinFearBase = require("../setMM3/CowerinFear");

class CowerinFear extends CowerinFearBase {
  constructor (game) {
    super(game, "Cower in Fear", "Magic 2013", "M13");
  }
}

module.exports = CowerinFear;

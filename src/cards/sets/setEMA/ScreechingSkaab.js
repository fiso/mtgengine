"use strict";
const Constants = require ("../../../Constants");
const ScreechingSkaabBase = require("../setDKA/ScreechingSkaab");

class ScreechingSkaab extends ScreechingSkaabBase {
  constructor (game) {
    super(game, "Screeching Skaab", "Eternal Masters", "EMA");
  }
}

module.exports = ScreechingSkaab;

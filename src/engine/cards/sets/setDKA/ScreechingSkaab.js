"use strict";
const Constants = require ("../../../Constants");
const ScreechingSkaabBase = require("../setEMA/ScreechingSkaab");

class ScreechingSkaab extends ScreechingSkaabBase {
  constructor (game) {
    super(game, "Screeching Skaab", "Dark Ascension", "DKA");
  }
}

module.exports = ScreechingSkaab;

"use strict";
const Constants = require ("../../../Constants");
const ScreechingSkaabBase = require("../setEMA/ScreechingSkaab");

class ScreechingSkaab extends ScreechingSkaabBase {
  constructor (game) {
    super(game, "Screeching Skaab", "Magic Origins", "ORI");
  }
}

module.exports = ScreechingSkaab;

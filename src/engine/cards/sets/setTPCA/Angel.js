"use strict";
const Constants = require ("../../../Constants");
const AngelBase = require("../setTC18/Angel");

class Angel extends AngelBase {
  constructor (game) {
    super(game, "Angel", "Planechase Anthology Tokens", "TPCA");
  }
}

module.exports = Angel;
